import React from 'react';
import PrimaryButton from '../primaryButton/primaryButton.component';
import CartItem from '../cartItem/cartItem.component';
import {
Container,
Items,
CartEmptyText
} from './cartSidebar.styles';
import { navigate } from 'gatsby';

const CartSideBar = ({ cartItems, dispatch }) => {
	return (
		<Container>
			<Items>
				{cartItems ? 
					cartItems.map(cartItem => (
						<CartItem key={cartItem.shopifyId} product={cartItem} />
					))
					:
					<CartEmptyText>You cart is empty</CartEmptyText>
				}
			</Items>
			<PrimaryButton clickHandler={() => navigate('/checkout')} text="Checkout" width='100%' />
		</Container>
	)
}

export default CartSideBar;