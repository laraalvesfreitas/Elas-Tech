import styled from "styled-components";

export const Card = styled.article`
background-color: white;
width: 100%;
padding: 2rem;
margin: 0 auto;
box-shadow: 0 0 5px rgb(0,0,0, 0.15);
border-radius: 10px;

display: flex;
flex-direction: column;
align-items: center;
`

export const ProductImage = styled.img`
width: 250px;
height: 400px;

object-fit: contain;
`

export const ProductTitle = styled.h2`
font-weight: 500;
font-size: 1.2rem;
margin-top: 1rem;
min-height: 4rem;
`

export const ReviewPriceContainer = styled.div`
width: 100%;
margin-top: 1rem;

display: flex;
justify-content: space-between;
align-items: center;
`

export const Review = styled.span`
display: flex;

font-size: 0.7rem;

svg{
    font-size: 1rem;
}
`

export const Price = styled.strong``

export const AddToCartButoonWrapper = styled.div`
align-items: center;
width: 100%;
margin-top: 1rem;

display:flex;
justify-content: center;
`

export const AddToCartButoon = styled.button`
background-color: blue;
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
color: white;
font-size: 0.75rem;

display: flex;
align-items: center;
justify-content: center;
gap: 0.3rem;

svg{
    font-size: 0.7rem;
}
`

export const RemoveFromCartButton = styled.button`
background-color: violet;
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
color: black;
font-size: 0.75rem;

display: flex;
align-items: center;
justify-content: center;
gap: 0.3rem;

    svg{
    font-size: 0.7rem;
}
`