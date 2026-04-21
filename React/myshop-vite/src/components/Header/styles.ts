import styled from "styled-components";

export const StyledHeader = styled.header `
background-color: navy;
`;

export const  Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`

export const ButtonWrapper = styled.div`
display: flex;
gap: 1rem;
`


export const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.6rem;
    font-weight: 500
`;

export const AuthButton = styled.button`
background-color: green;
border: none;
border-radius: 5px;
padding: 0 1rem;
height: 30px;
color: white;
font-size: 0.75rem;

display: flex;
align-items: center;
gap: 0.3rem;

svg{
    font-size : 0.7rem;
}
`;

export const CartButton = styled.button`
background-color: violet;
border: none;
border-radius: 5px;
padding: 0 1rem;
height: 30px;
color: black;
font-size: 0.75rem;

display: flex;
align-items: center;
gap: 0.3rem;

svg{
    font-size: 0.7rem;
}
`;