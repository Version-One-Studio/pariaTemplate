// const axios = require('axios');

// const DRAFT_ORDERS='draft_orders.json';

// const pasUrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_PASSWORD}@latenightwithaj.myshopify.com/admin/api/2020-07`

// const shopifyRequest = axios.create({
// 	baseURL: `https://${process.env.SHOPIFY_NAME}.myshopify.com/admin/api/2020-04`,
// 	timeout: 6000,
// 	headers: {
// 		'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
// 	}
// });

//customer:{} email, first_name, last_name
//linItems: [{}] variant_id, quantity, title, price

// const createDraftOrder = async (customer, lineItems) => {
// console.log("in create draft order serverless")

// 	try {

// 		const response = shopifyRequest.post(`/${DRAFT_ORDERS}`, {
// 												draft_order: {
// 													customer: {
// 														...customer,
// 														created_at: new Date().toISOString()
// 													},
// 													line_items: [...lineItems]
// 												}
// 											});
// 		console.log(response.data);
// 	} catch(error) {

// 		console.log(error)

// 	}
	
// }

exports.handler = function(event, context, callback) {

	// const data = JSON.stringify(event.body);

	// console.log(data);

	callback(null, {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type"
    },
    body: "Hello, World"
		});
		
}