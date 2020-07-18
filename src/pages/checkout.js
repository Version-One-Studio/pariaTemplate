import React from 'react';
import styled from 'styled-components';
import CheckoutItem from '../components/checkoutItem/checkoutitem.component';
import { useGlobalDisptach, useGlobalState } from '../context/GlobalContextProvider';
import Header from '../components/header/header.component';


const Checkout = () => {

	const state = useGlobalState();
	const dispatch = useGlobalDisptach();

	const { shoppingCart } = state;

	console.log(state.shoppingCart)
	return(
		<Container>
		<Header />
		<Wrapper>
			<div></div>
			<Title>Your Cart</Title>
			<CheckoutItems>
				{
					shoppingCart.map((item) => (
						<CheckoutItem />
					))
				}
			</CheckoutItems>
		</Wrapper>
		</Container>
	)
}

export default Checkout;

const Container = styled.div``;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 20% 1fr 20%;
`;

const Title = styled.h1`
width: 134px;
height: 41px;
text-align: left;
font: Bold 30px/58px Avenir Next;
letter-spacing: 0px;
color: #2C2C2C;
opacity: 1;
`;

const CheckoutItems = styled.div`
grid-column: 2/4;
margin-top:
`;
