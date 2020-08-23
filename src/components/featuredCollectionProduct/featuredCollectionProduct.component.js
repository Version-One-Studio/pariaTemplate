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
			<Price>{parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}</Price>
		</Caption>
	</Container>
	)
}

export default FeaturedCollectionProduct;