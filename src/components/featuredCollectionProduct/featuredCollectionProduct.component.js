import React from 'react';
import {
	Container,
	ImgContainer,
	ProductImg,
	Caption,
	Title,
	Price
} from './featuredCollectionProduct.styles';

const FeaturedCollectionProduct = ({ product }) => {
	return (
	<Container>
		<ImgContainer>
			<ProductImg src={product.images[0].originalSrc}/>
		</ImgContainer>
		<Caption>
			<Title>{product.title}</Title>
			<Price>{product.priceRange.minVariantPrice.amount}</Price>
		</Caption>
	</Container>
	)
}

export default FeaturedCollectionProduct;