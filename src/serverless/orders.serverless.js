import axios from 'axios'

const serverlessBaseUrl = 'http://localhost:8888/.netlify/functions'
//const serverlessBaseUrl = 'http://70a4ad5c73d4.ngrok.io/.netlify/functions'

const DRAFT_ORDERS = 'draftOrders';
const COMPLETE_ORDERS = 'completeDraftOrder';

const shopifyRequest = axios.create({
	baseURL: `${serverlessBaseUrl}`,
	timeout: 6000,
	headers: {
		"Access-Control-Allow-Origin": "*"
	}
});


export const createDraftOrder = async (customer, lineItems, shippingAddress) => {

	try {
		//Our middleware in gatsby config will write this to local host or prod
		//when making the call, depending on the environment that it's in
		const response = await shopifyRequest.post(`${serverlessBaseUrl}/${DRAFT_ORDERS}`, 
		//Send the body, build the draft order request in the serverless function
			JSON.stringify(
				{
					customer: {
						...customer,
						accepts_marketing: true,
					},
					shipping_address: {
						...shippingAddress
					},
					line_items: [...lineItems]
				}
			)
		);
		//Return the ID to we can send it as the Wipay ID
		return response.data.draft_order.id
	} catch(error) {
		console.log(error)
	}
	
}

export const completeDraftOrder = async (draftOrderId) => {

	console.log(`IN SEVERELESS ${draftOrderId}`);
	
	try {
		
		const response = await shopifyRequest.post(`${serverlessBaseUrl}/${COMPLETE_ORDERS}`,
			//Send the body, build the draft order request in the serverless function
			JSON.stringify(
				{
					orderId: draftOrderId
				}
			)
		);
		return response.data

	} catch(error) {

		console.log(error)

	}
}






