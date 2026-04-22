import { useState } from "react";
import * as S from "./styles"
import { FiLogIn, FiLogOut, FiShoppingCart} from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";


export const Header: React.FC = () =>{
        const {user} = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)

        const dispatch = useDispatch()

    const [showCart, setShowCart] = useState(false)
    const isLogged = user !== null;


    function handleUserAuth(){
    //Usuário não está logado
    if(user === null){
        // Despachar a Action de login
        dispatch(login({
            payload: {
                name: 'Lara Alves',
                email: 'lara@email.com'
            }
        }))}else{

            dispatch(logout({}))
        }
    }

    return(
        <S.StyledHeader>

            <S.Wrapper>
                <S.HeaderTitle>Myshop.</S.HeaderTitle>           

                <S.ButtonWrapper>
                    <S.AuthButton isLogged = {isLogged} onClick={handleUserAuth}> 
                        {isLogged ? 'Logout' : 'Login'} 
                        {isLogged ? <FiLogOut/> : <FiLogIn />}
                    </S.AuthButton>

                    <S.CartButton onClick={() => setShowCart(!showCart)}> 
                        Carrinho 
                    <FiShoppingCart />
                    </S.CartButton>

                </S.ButtonWrapper>

            </S.Wrapper>

            <Cart showCart= {showCart}/>

        </S.StyledHeader>
    )
}