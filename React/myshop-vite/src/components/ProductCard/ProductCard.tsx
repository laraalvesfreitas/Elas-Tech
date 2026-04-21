import { FiShoppingCart } from 'react-icons/fi'
import *  as S from './styles'
export const ProductCard: React.FC = () =>{
    return(

        <S.Card>

            <S.ProductImage  src= "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" alt= ""/>
            <S.ProductTitle>Mens Casual Premium Slite Fit T-shirts </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>4.1</S.Review>
                <S.Price>$22.30</S.Price>

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