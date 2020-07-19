import React, { useRef, useState } from 'react'
import {
	Container,
	OrderTotalBreakdown,
	Row,
	Label,
	WipayLoaderContainer
} from './orderBreakdown.styles';
import { useTotal } from '../../custom-hooks/usePrice';
import { useGlobalState } from '../../context/GlobalContextProvider';
import PrimaryButton from '../primaryButton/primaryButton.component';
import WipayPayment from '../wipay/wipayPayment.component';
import WiPayLoader from '../wipay/wipayLoader.component';

const OrderBreakdown = () => {

    const state = useGlobalState();
    const { shoppingCart } = state;
    
		const paymentForm = useRef(null)
		
    const loadingCard = useRef(null)

    const [showIntermittentLoader, setShowIntermittentLoader] = useState(false)

		const { orderSubtotal, orderTotal } = useTotal(shoppingCart, 20)
		
		const disabled = () => {

			return shoppingCart.length < 1 ? true : false 

		}

    const goToWipay = () => {
    
			setShowIntermittentLoader(true)
			
			paymentForm.current.submit()
        
        // loadingCard.current.scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        // })
        
    }

    if (showIntermittentLoader) {
        return (
					<WipayLoaderContainer>
						<WiPayLoader refProp={loadingCard} />
					</WipayLoaderContainer>
				)
		}
	

    return (
        <Container>
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
            <WipayPayment 
                paymentFormRef={paymentForm}
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