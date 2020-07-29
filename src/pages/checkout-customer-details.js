import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/header/header.component';
import { useGlobalState } from '../context/GlobalContextProvider';
import PrimaryButton from '../components/primaryButton/primaryButton.component';
import { createDraftOrder } from '../serverless/orders.serverless';
import WipayPayment from '../components/wipay/wipayPayment.component';
import WiPayLoader from '../components/wipay/wipayLoader.component';
import { useTotal } from '../custom-hooks/usePrice';

const return_url = process.env.GATSBY_RETURN_URL;

const TextInputField = ({ name, placeholder, value, onChangeHandler }) => {
	return (
		<Wrapper>
			<InputField type='text' name={name} placeholder={placeholder} value={value} onChange={onChangeHandler} />
		</Wrapper>
	)
}

const CheckoutCustomerDetails = () => {

	//Hooks
	const state = useGlobalState();

	const paymentFormRef = useRef(null);

	const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', address: '', phone: ''});
	
	const [orderId, setOrderId] = useState('-1');

	const [showIntermittentLoader, setShowIntermittentLoader] = useState(false);

	const { orderTotal } = useTotal(state.shoppingCart, 20)

	console.log("orderTotal")
	console.log(orderTotal);

	console.log(state.lineItems)

	const handleOnChange = (e) => {
		console.log("OnChange called");
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	const handleOnSubmit = (e) => {
		console.log("On Handle Submit");
		e.preventDefault();
	}

	const goToWipay = async () => {
    
		setShowIntermittentLoader(true)

		if(!validateForm()) return;

		console.log("validation passed");

		// Create a draft order and get its ID

		const draftOrderId = await createDraftOrder({
			email: formData.email,
			phone: formData.phone,
			first_name: formData.firstName,
			last_name: formData.lastName
		}, state.lineItems, { address1: formData.address });

		//Set the ID and submit the form!
		console.log(draftOrderId);
		setOrderId(draftOrderId)
		requestAnimationFrame(() => paymentFormRef.current.submit())
        
	}
	
	const validateForm = () => {
		if(Object.values(formData).filter(value => value === '').length > 0) return false

		if(formData.email.indexOf('@') === -1) return false

		return true;
	}

	return(
		
		<Container>
			<Header />
			<Title>Customer Details</Title>

			<Form onSubmit={handleOnSubmit}>

				<FullNameGroup>
					<TextInputField 
						name='firstName'
						placeholder='First Name'
						value={formData.firstName}
						onChangeHandler={handleOnChange}
					/>

					<TextInputField 
						name='lastName'
						placeholder='Last Name'
						value={formData.lastName}
						onChangeHandler={handleOnChange}
					/>
				</FullNameGroup>

				<TextInputField 
						name='address'
						placeholder='Address'
						value={formData.address}
						onChangeHandler={handleOnChange}
					/>
				<TextInputField 
						name='email'
						placeholder='Email'
						value={formData.email}
						onChangeHandler={handleOnChange}
					/>
				<TextInputField 
						name='phone'
						placeholder='Phone Number'
						value={formData.phone}
						onChangeHandler={handleOnChange}
					/>

					<PrimaryButton 
						text="Continue to Payment" 
						width="280px" 
						marginLeft='auto' 
						marginTop="40px" 
						clickHandler={goToWipay}/>
			</Form>


			{
					showIntermittentLoader && 

					<WipayLoaderContainer>
					<	WiPayLoader />
					</WipayLoaderContainer>
			}

			{
				orderId !== '-1' ? 
				<WipayPayment 
						ref={paymentFormRef}
						amount={orderTotal}
						email={formData.email}
						name={`${formData.firstName} ${formData.lastName}`}
						orderId={orderId}
						phone={formData.phone}
						returnUrl={return_url}
				/>
				:
				null
			
			}
		</Container>
	)
}

export default CheckoutCustomerDetails;

const Container = styled.div`
padding: 40px 20px;
position: relative;
`;

const Title = styled.h1`
text-align: left;
font: 400 25px/34px 'Futura PT';
letter-spacing: 0px;
color: #5E5E5E;
opacity: 1;
max-width: 800px;
margin-left: auto;
margin-right: auto;
`;

const Wrapper = styled.div`
width: 100%;
height: 47px;
opacity: 0.4;
margin-top: 20px;
`;

const InputField = styled.input`
width: 100%;
height: 100%;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 5px;
opacity: 1;
text-align: left;
font: 400 14px/34px 'Futura PT';
letter-spacing: 0px;
color: #5E5E5E;
padding: 10px 20px;
`;

const FullNameGroup = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
grid-column-gap: 20px;
`;

const Form = styled.form`
max-width: 800px;
margin-left: auto;
margin-right: auto;
`;

const WipayLoaderContainer = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 1);
`;