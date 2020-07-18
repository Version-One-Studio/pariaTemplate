import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { useTotal } from '../../custom-hooks/usePrice';
import { useGlobalState } from '../../context/GlobalContextProvider';
import PrimaryButton from '../primaryButton/primaryButton.component';
import WipayPayment from '../wipay/wipayPayment.component';
import WiPayLoader from '../wipay/wipayLoader.component';

const Container = styled.section`
    max-width: 550px;
    grid-column: 2/4;
    @media (max-width: 750px) {
        width: 100%;
        margin: 0;
    }
`;

const OrderTotalBreakdown = styled.div`
    
    margin-top: 25px;
    margin-bottom: 30px;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.last ? '20px' : '5px'};
`;
const Label = styled.p`
    margin: 0;
    font-size: 22px;
    /* font-size: ${props => props.total ? '24px' : '16px'}; */
    font-weight: ${props => props.total ? 500 : 'normal'};
    font-family: "Avenir Next";
    font-weight: 600;
`;

const OrderBreakdown = () => {

    const state = useGlobalState();
    const { shoppingCart } = state;
    
    const paymentForm = useRef(null)
    const loadingCard = useRef(null)

    const [showIntermittentLoader, setShowIntermittentLoader] = useState(false)

    const { orderSubtotal, orderTotal } = useTotal(shoppingCart, 20)

    const goToWipay = () => {
    
        paymentForm.current.submit()
        setShowIntermittentLoader(true)
        
        // loadingCard.current.scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        // })
        
    }

    // if (!showIntermittentLoader) {
    //     return <WiPayLoader refProp={loadingCard} />
    // }

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
                // width={275}
                clickHandler={() => goToWipay()}
                text="Continue to Checkout"
            />
            <WipayPayment 
                paymentFormRef={paymentForm}
                amount={orderTotal}
                email="andelhusbands@gmail.com"
                name="Andel Husbands"
                orderId="123"
                phone="8687188625"
                returnUrl="http://localhost:8000/cart"

            />
        </Container>
    )
}

export default OrderBreakdown