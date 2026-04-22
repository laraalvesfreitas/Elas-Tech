import { FiShoppingCart } from 'react-icons/fi'
import *  as S from './styles'
import type { Product } from '../../data/products';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import type { RootReducer } from '../../redux/root-reducer';


interface ProductCardProps{
    product: Product;
}



export const ProductCard: React.FC <ProductCardProps>= ({product}) =>{
   const {cart} = useSelector((rootReducer:RootReducer) => rootReducer.cartReducer)
   const dispatch =  useDispatch() 

   const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id) !== undefined;

  function  handleAddProductToCart(){
    dispatch({
        type: 'cart/add-product',
        payload: product,
    })
  }


  function handleRemoveProductfromCart(){
        dispatch({
            type: 'cart/remove-product',
            payload: product,

        })
    }

    return(

        <S.Card>

            <S.ProductImage  src= {product.image} alt= {product.description}/>
            <S.ProductTitle>{product.title} </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    { Array.from({ length: 5 }).map((_, index) =>index < Math.round(product.rating.rate) ? ( <FaStar key={index} />) : ( <FaRegStar key={index} />))}
                    ({`  ${product.rating.rate}`})
                </S.Review>
                <S.Price>${product.price}</S.Price>

            </S.ReviewPriceContainer>

            <S.AddToCartButoonWrapper>
                {isProductOnCart ? (
                    <S.RemoveFromCartButton   onClick={handleRemoveProductfromCart} >
                    Remover do carrinho
                    <FiShoppingCart/>
                    </S.RemoveFromCartButton >
                ): (  
                    <S.AddToCartButoon onClick={handleAddProductToCart}>
                    Adicionar ao carrinho
                    <FiShoppingCart/>
                    </S.AddToCartButoon>
                )}
                

                

            </S.AddToCartButoonWrapper>
                

        </S.Card>



    )
}