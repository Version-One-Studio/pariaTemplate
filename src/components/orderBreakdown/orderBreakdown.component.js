import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import {
	Container,
	OrderTotalBreakdown,
	Row,
	Label
} from './orderBreakdown.styles';
import { useTotal } from '../../custom-hooks/usePrice';
import { useGlobalState, useGlobalDisptach } from '../../context/GlobalContextProvider';
import PrimaryButton from '../primaryButton/primaryButton.component';
import { CREATE_LINE_ITEMS_FROM_CART } from '../../context/actionTypes';
import * as margins from '../../theme/margins';

const OrderBreakdown = () => {
	
	//Context
	const state = useGlobalState();	
	const dispatch = useGlobalDisptach();

  const { shoppingCart } = state;

	//Hooks
	const { orderSubtotal, orderTotal } = useTotal(shoppingCart, 20)


	useEffect(() => {
		dispatch({type: CREATE_LINE_ITEMS_FROM_CART});
		console.log("Dispatched create line items")
	}, [shoppingCart])
		
	const disabled = () => {

		return shoppingCart.length < 1 ? true : false 

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
									clickHandler={() => navigate('/checkout-customer-details')}
									text="Checkout"
									disabled={disabled()}
									marginTop={margins.marginMedium}
								
							/>
        </Container>
    )
}

export default OrderBreakdown