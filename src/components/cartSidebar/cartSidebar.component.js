import React from 'react';
import PrimaryButton from '../primaryButton/primaryButton.component';
import CartItem from '../cartItem/cartItem.component';
import {
Container,
Items,
CartEmptyText
} from './cartSidebar.styles';
import { navigate } from 'gatsby';
import { TOGGLE_SIDEBAR_HIDDEN } from '../../context/actionTypes';

const CartSideBar = ({ cartItems, dispatch }) => {

	const handleGoToCheckout = () => {

		dispatch({type: TOGGLE_SIDEBAR_HIDDEN});

		navigate('/cart')
	}


	return (
		<Container>
			<Items>
				{cartItems.length > 0 ? 
					cartItems.map(cartItem => (
						<CartItem key={cartItem.shopifyId} product={cartItem} />
					))
					:
					<CartEmptyText>You cart is empty</CartEmptyText>
				}
			</Items>
			<PrimaryButton clickHandler={() => handleGoToCheckout()} text="Go to Checkout" width='100%' />
		</Container>
	)
}

export default CartSideBar;