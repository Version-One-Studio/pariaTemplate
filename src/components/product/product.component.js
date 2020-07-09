import React from 'react';
import styled from 'styled-components';

const Product = ({ product }) => {
	return (
	<Container>
		<ImgContainer>
			<ProductImg src={product.img}/>
		</ImgContainer>
		<Caption>
			<Title>{product.title}</Title>
			<Price>TT$250.00</Price>
		</Caption>
	</Container>
	)
}

export default Product;

const Container = styled.div`
min-width: 100%;
min-height: 100%;
display: grid;
grid-template-rows: 80% 1fr;
justify-items: center;
`;

const ImgContainer = styled.div`
display: flex;
`;

const ProductImg = styled.img`
object-fit: cover;
`;

const Caption = styled.div`
text-align: center;
height: 100%;
`;

const Title = styled.p`
color: #555555;
font-size: 17px;
font-weight: 700;
text-transform: uppercase;
margin-top: 20px;
text-align: left;
`;

const Price = styled.p`
font-size: 26px;
font-weight: bold;
color: #2C2C2C;
`;