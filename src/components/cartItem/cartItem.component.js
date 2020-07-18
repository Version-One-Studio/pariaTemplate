import React from 'react';
import styled from 'styled-components';


const CartItem = ({ product }) => {
	return (
		<Container>
			<Img src={product.image.originalSrc} />
			<Details>
			<ProductName>{product.title}</ProductName>
			<Price>{product.count} x ${product.price}</Price>
			</Details>
		</Container>
	)
}

export default CartItem;


const Container = styled.div`
display: grid;
grid-template-columns: 35% 1fr;
grid-column-gap: 8px;
align-items: center;
margin-top: 8px;
height: 100px;
`;

const Img = styled.img` 
width: 100%;
object-fit: cover;
`;

const Details = styled.div``;

const ProductName = styled.h4``;

const Price = styled.p``;