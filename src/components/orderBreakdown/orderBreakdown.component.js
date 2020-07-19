import React, { useRef, useState, useEffect } from 'react'
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

const OrderBreakdown = () => {

		const state = useGlobalState();
		
		const dispatch = useGlobalDisptach();

    const { shoppingCart } = state;
    
		const paymentFormRef = useRef(null)
		
    const loadingCard = useRef(null)

    const [showIntermittentLoader, setShowIntermittentLoader] = useState(false)

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

			await createDraftOrder({
				name: 'Jonathan.agarrat@gmail.com',
				first_name: 'Jonathan',
				last_name: 'Agarrat'
			}, state.lineItems);
			
			paymentFormRef.current.submit();
			
        
        // loadingCard.current.scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        // })
        
    }

    // if (showIntermittentLoader) {

    //     return (
		// 			<WipayLoaderContainer>
		// 				<WiPayLoader refProp={loadingCard} />
		// 			</WipayLoaderContainer>
		// 		)
		// }

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
							/>
							</>
					}
            <WipayPayment 
                ref={paymentFormRef}
                amount={orderTotal}
                email="andelhusbands@gmail.com"
                name="Andel Husbands"
                orderId="123"
                phone="8687188625"
                returnUrl="http://localhost:8000/checkoutComplete"

            />

        </Container>
    )
}

export default OrderBreakdown