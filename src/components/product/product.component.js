import React from 'react';
import {
Container,
ProductImage,
Image,
Caption,
Title,
Price
} from './product.styles';
import PrimaryButton from '../primaryButton/primaryButton.component';
import { marginMedium } from '../../theme/margins';
import { navigate } from 'gatsby';

const Product = ({ product }) => {
	const [firstImage] = product.images;
	const {priceRange: { minVariantPrice: { amount } }} = product;
	return (
		<Container>
			<ProductImage>
				<Image src={firstImage.originalSrc} />
			</ProductImage>
			<Caption>
				<Title>{product.title}</Title>
				<Price>${amount}</Price>
			</Caption>
			<PrimaryButton text="Add to Cart" width="100%" marginTop={marginMedium} clickHandler={() => navigate(`/shop/${product.handle}`)}/>
		</Container>
	)
}

export default Product