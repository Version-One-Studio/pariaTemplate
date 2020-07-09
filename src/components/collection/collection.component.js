import React from 'react';
import styled from 'styled-components';
import Product from '../product/product.component';
import backpack1 from '../../images/backpack1.png';
import backpack2 from '../../images/backpack2.png';
import backpack3 from '../../images/backpack3.png';

const products = [
	{
		title: "The Argyle Falls Backpack",
		price: "250.00",
		img: backpack1
	},
	{
		title: "The BALANDRA BASIN Backpack",
		price: "350.00",
		img: backpack2
	},
	{
		title: "The PEECHON COVE Backpack",
		price: "190.00",
		img: backpack3
	},

]

const Collection = () => {
	return(
		<Container>
		<Title>Shop the Waterfall Collection</Title>
		<ProductList>
			{
				products.map((product) => (
					<Product product={product} />
				))
			}
		</ProductList>
		
		<ViewCollectionButton>See all from this collection</ViewCollectionButton>
		</Container>
	)
}

export default Collection;

const Container = styled.div`
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding-left: 20px;
padding-right: 20px;
`;

const ProductList = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 20px;
`;

const Title = styled.h1`
font-size: 30px;
font-weight: bold;
line-height: 58px;
color: #2C2C2C;
text-align: center;
margin-top: 50px;
`;

const ViewCollectionButton = styled.button`
background-color: #000;
display: block;
cursor: pointer;
margin-top: 50px;
margin-bottom: 50px;
width: 315px;
height: 54px;
color: white;
border: none;
margin-left: auto;
margin-right: auto;
text-transform: uppercase;
box-shadow: 0 4px 40px rgba(0,0,0, 0.25);
transition: transform 0.3s ease-in-out;

:hover {
	transform: scale(1.1);
}
`;