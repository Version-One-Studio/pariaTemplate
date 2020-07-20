import axios from 'axios'

// const serverlessBaseUrl = 'http://localhost:8888/.netlify/functions'
const serverlessBaseUrl = 'https://hardcore-clarke-2c8435.netlify.app/.netlify/functions'

const DRAFT_ORDERS = 'draftOrders';

const shopifyRequest = axios.create({
	baseURL: `${serverlessBaseUrl}`,
	timeout: 6000,
	headers: {
		"Access-Control-Allow-Origin": "*"
	}
});

//customer:{} email, first_name, last_name
//linItems: [{}] variant_id, quantity, title, price

export const createDraftOrder = async (customer, lineItems) => {
console.log("in create draft order serverless")
	try {

		const response = shopifyRequest.post(`/${DRAFT_ORDERS}`, {
												draft_order: {
													customer: {
														...customer,
														created_at: new Date().toISOString()
													},
													line_items: [...lineItems]
												}
											});
		console.log(response.data);
	} catch(error) {

		console.log(error)

	}
	
}






