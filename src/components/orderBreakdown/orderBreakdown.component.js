import React, { useRef, useState, useEffect } from 'react';
import {
	Container,
	OrderTotalBreakdown,
	Row,
	Label,
	WipayLoaderContainer
} from './orderBreakdown.styles';
import { useTotal } from '../../custom-hooks/usePrice';
import { useGlobalState, useGlobalDisptach } from '../../context/GlobalContextProvider';
import PrimaryButton from '../primaryButton/primaryButton.component';
import WipayPayment from '../wipay/wipayPayment.component';
import WiPayLoader from '../wipay/wipayLoader.component';
import { CREATE_LINE_ITEMS_FROM_CART } from '../../context/actionTypes';
import { createDraftOrder } from '../../serverless/orders.serverless';
import * as margins from '../../theme/margins';

const OrderBreakdown = () => {
	
	//Context
	const state = useGlobalState();	
	const dispatch = useGlobalDisptach();

  const { shoppingCart } = state;
	
	//Refs
	const paymentFormRef = useRef(null)
  const loadingCard = useRef(null)

	//State
  const [showIntermittentLoader, setShowIntermittentLoader] = useState(false)
	const [orderId, setOrderId] = useState('-1')

	//Hooks
	const { orderSubtotal, orderTotal } = useTotal(shoppingCart, 20)


	useEffect(() => {
		dispatch({type: CREATE_LINE_ITEMS_FROM_CART});
		console.log("Dispatched create line items")
	}, [])
		
	const disabled = () => {

		return shoppingCart.length < 1 ? true : false 

	}

    const goToWipay = async () => {
    
		setShowIntermittentLoader(true)
		console.log('line items')
		console.log(state.lineItems);

		//Create a draft order and get its ID
		const draftOrderId = await createDraftOrder({
			email: 'jonathan.agarrat@gmail.com',
			phone: '+19172002947',
			first_name: 'Jonathan',
			last_name: 'Agarrat'
		}, state.lineItems);

		//Set the ID and submit the form!
		console.log(draftOrderId);
		setOrderId(draftOrderId)
		requestAnimationFrame(() => paymentFormRef.current.submit())
        
    }

    return (
        <Container showIntermittentLoader={showIntermittentLoader}>
					{
						showIntermittentLoader ? 

						<WipayLoaderContainer>
						<	WiPayLoader refProp={loadingCard} />
						</WipayLoaderContainer>
					:
						<>
							<OrderTotalBreakdown>
									<Row>
											<Label>Item Total</Label>
											<Label>${orderSubtotal}</Label>    
									</Row>
									<Row last>
											<Label>Delivery</Label>
											<Label>$20.00</Label>    
									</Row>
									<Row>
											<Label total>Total</Label>
											<Label total>${orderTotal}</Label>    
									</Row>
							</OrderTotalBreakdown>

							<PrimaryButton
									clickHandler={() => goToWipay()}
									text="Checkout"
									disabled={disabled()}
									marginTop={margins.marginMedium}
								
							/>
							</>
					}
						{
							orderId !== '-1' ? 
							<WipayPayment 
									ref={paymentFormRef}
									amount={orderTotal}
									email="andelhusbands@gmail.com"
									name="Andel Husbands"
									orderId={orderId}
									phone="8687188625"
									returnUrl="http://localhost:8000/checkoutComplete"
							/>
							:
							null
						}
        </Container>
    )
}

export default OrderBreakdown