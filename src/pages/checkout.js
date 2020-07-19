import React from 'react';
import styled from 'styled-components';
import CheckoutItem from '../components/checkoutItem/checkoutitem.component';
import { useGlobalDisptach, useGlobalState } from '../context/GlobalContextProvider';
import Header from '../components/header/header.component';
import OrderBreakdown from '../components/orderBreakdown/orderBreakdown.component';
import Footer from '../components/footer/footer.component';


const Checkout = () => {

	const state = useGlobalState();
	const dispatch = useGlobalDisptach();

	const { shoppingCart } = state;

	console.log(shoppingCart);
	console.log(state.shoppingCart)
	return(
		<Container>
		<Header />
		<Wrapper>
			<div></div>
			<Title>Your Cart</Title>
			{
				shoppingCart.length > 0 ?
				<>
					<CheckoutItems>
						{
							shoppingCart.map((item) => (
								<CheckoutItem product={item} key={item.shopifyId} />
							))
						}
					</CheckoutItems>
				</>
				:
				<CartEmptyText>You cart is empty</CartEmptyText>
			}
			
			<OrderBreakdown />
		</Wrapper>
		<Footer />
		</Container>
	)
}

export default Checkout;

const Container = styled.div`
min-height: 100vh;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 20% 1fr 20%;
grid-template-rows: 50px 1fr 1fr;
margin-bottom: 50px;
height: 100%;
position: relative;
`;

const Title = styled.h1`
width: 134px;
height: 41px;
text-align: left;
font: Bold 30px/58px 'Avenir Next';
letter-spacing: 0px;
color: #2C2C2C;
opacity: 1;
`;

const CheckoutItems = styled.div`
	grid-column: 2/4;
`;

const CartEmptyText = styled.p`
grid-column: 2/4;
margin: 100px 0;
font-size: 30px;
font-weight: 500;
line-height: 1.4%;
`;