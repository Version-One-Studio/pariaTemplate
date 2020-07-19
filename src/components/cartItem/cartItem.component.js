import React from 'react';
import {
	Container,
	Img,
	Details,
	ProductName,
	Price,
} from './cartItem.styles';


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


