import React from 'react';
import { useGlobalDisptach } from '../../context/GlobalContextProvider';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../../context/actionTypes';
import {
	Container,
	Grid,
	Img,
	Details,
	Title,
	Style,
	Price,
	RemoveFromCart
} from './checkoutItem.styles';
import ProductCounter from '../productCounter/proudctCounter.component';


const CheckoutItem = ({ product }) => {

	const dispatch = useGlobalDisptach()
 
	const incrementCartItem = () => {

		console.log("increment called");

		
		updatecart(product.count + 1);

	}

	const decrementCartItem = () => {

		console.log("decrement Cart")

		// Ensure count never reaches 0;
		if(product.count === 1) return

		updatecart(product.count - 1);

	}

	const updatecart = (newCount) => {
		dispatch({
			type: ADD_ITEM_TO_CART,
			item: product,
			count: newCount
		})
	}

const removeItemFromCart = () => {

	console.log("Item deleted");
	
	dispatch({
		type: REMOVE_ITEM_FROM_CART,
		item: product
	})
}

	return (
		<Container>
			<Grid>
				<Img src={product.image.originalSrc} />
				<Details>
					<Title>{product.title}</Title>
					<Style>{product.style}</Style>
					<Price>${product.price * product.count}</Price>
					<ProductCounter count={product.count} handleAdd={incrementCartItem} handleMinus={decrementCartItem} />
				</Details>
				<RemoveFromCart onClick={() => removeItemFromCart()}>Remove from Cart</RemoveFromCart>
			</Grid>
		</Container>
	)
}

export default CheckoutItem;