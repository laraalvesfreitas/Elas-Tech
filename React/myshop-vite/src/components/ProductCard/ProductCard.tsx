import { FiShoppingCart } from 'react-icons/fi'
import *  as S from './styles'
import type { Product } from '../../data/products';
import { FaStar, FaRegStar } from "react-icons/fa";


interface ProductCardProps{
    product: Product;
}

export const ProductCard: React.FC <ProductCardProps>= ({product}) =>{
    return(

        <S.Card>

            <S.ProductImage  src= {product.image} alt= {product.description}/>
            <S.ProductTitle>{product.title} </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    { Array.from({ length: 5 }).map((_, index) =>index < Math.round(product.rating.rate) ? ( <FaStar key={index} />) : ( <FaRegStar key={index} />))}
                    ({` ${product.rating.rate}`})
                </S.Review>
                <S.Price>${product.price}</S.Price>

            </S.ReviewPriceContainer>

            <S.AddToCartButoonWrapper>
                <S.AddToCartButoon>
                    Adicionar ao carrinho
                    <FiShoppingCart/>
                </S.AddToCartButoon>

            </S.AddToCartButoonWrapper>
            

        </S.Card>



    )
}