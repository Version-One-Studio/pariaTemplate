import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as queryString from 'query-string';
import PrimaryButton from '../components/primaryButton/primaryButton.component';
import { navigate } from 'gatsby';
import Header from '../components/header/header.component';
import { useGlobalDisptach } from '../context/GlobalContextProvider';
import { CLEAR_CART } from '../context/actionTypes';
import { completeDraftOrder } from '../serverless/orders.serverless';


const CheckoutComplete = ({ location }) => {

	console.log(location)
	const {status, name, total, order_id} = queryString.parse(location.search)
	const dispatch = useGlobalDisptach();
	const [orderComplete, setOrderComplete] = useState(false);
	const [updatingOrder, setUpdatingOrder] = useState(true);

	useEffect(() => {

		dispatch({type: CLEAR_CART})

		const updateOrder = async (order_id) => {
			await completeDraftOrder(order_id);
			setUpdatingOrder(false);
			setOrderComplete(true);
		}

		updateOrder(order_id);
		
	}, [dispatch])

	return (
		<Container>
			<Header />
			<Main>
				{orderComplete && !updatingOrder 
				?
				<Wrapper>
					<Title>Thank You {name}!</Title>
					<Message>
						Your order has been placed. You will receive payment and order confirmation via email shortly
					</Message>

					<OrderTotal>
						<Row>
							<Text>Order subtotal</Text>
							<Amount>${total - 20}</Amount>
						</Row>
						<Row>
							<Text>Delivery</Text>
							<Amount>$20</Amount>
						</Row>
						<Row>
							<Text>Total</Text>
							<Amount>${total}</Amount>
						</Row>
					</OrderTotal>

					<PrimaryButton text='Return Home' clickHandler={() => navigate('/')} />

				</Wrapper>
				:
				updatingOrder && !orderComplete ?
				<h1>Completeing Order</h1>
				:
				<h1>Order update failed</h1>
				}
				</Main>
				
		</Container>
	)
}

export default CheckoutComplete;

const Container = styled.div`
`;

const Main = styled.div`
display: grid;
grid-template-columns: 20% 1fr 20%;
justify-items: center;
margin-top: 60px;
`;

const Wrapper = styled.div`
grid-column: 2/3;
`;

const Title = styled.h1`
height: 41px;
text-align: left;
font: 700 30px/58px Avenir Next;
letter-spacing: 0px;
color: #2C2C2C;
opacity: 1;
`;

const Message = styled.p`
margin-top: 20px;
width: 470px;
height: 92px;
text-align: left;
font: 600 22px/31px 'Avenir Next';
letter-spacing: 0px;
color: #2C2C2C;
opacity: 1;
`;

const OrderTotal = styled.div`
margin: 60px 0;
width: 521px;
height: 173px;
background: #F5F5F5 0% 0% no-repeat padding-box;
opacity: 1;
padding: 20px 40px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 8px;

:last-child > h3{
	font-weight: 700;
}

`;

const Text = styled.h3`
height: 36px;
text-align: left;
font: 600 26px/37px 'Avenir Next';
letter-spacing: 0px;
color: #2C2C2C;
`;

const Amount = styled.h3`
text-align: right;
height: 36px;
font: 600 26px/37px 'Avenir Next';
letter-spacing: 0px;
color: #2C2C2C;
`;