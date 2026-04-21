import styled from "styled-components";

export const Card = styled.article`
background-color: white;
width: 100%;
padding: 1rem;
margin: 0 auto;
`

export const ProductImage = styled.img`
width: 90%;
`

export const ProductTitle = styled.h2`
font-weight: 500;
font-size: 1.2rem;
`

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Review = styled.span``

export const Price = styled.strong``

export const AddToCartButoonWrapper = styled.div`
display:flex;
justify-content: center;
`

export const AddToCartButoon = styled.button`
background-color: blue;
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
    font-size: 0.7rem;
}
`