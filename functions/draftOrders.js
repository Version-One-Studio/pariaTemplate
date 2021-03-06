
//MUST REQUIRE THIS IN ORDER TO ACCESS PROCESS ENV
const axios = require('axios');

const DRAFT_ORDERS ='draft_orders.json';

const STATUS_CODE = {
	OK: 200,
	BAD: 400
}

//Create axios instance
const shopifyInstance = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_PASSWORD}@${process.env.SHOPIFY_NAME}.myshopify.com/admin/api/2020-04/`,
    headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_PASSWORD,
        "Access-Control-Allow-Origin": "*",
    },
})

const submitDraftOrder = async (customer, line_items, shipping_address) => {
	console.log(customer);
	try {
		const response = await shopifyInstance.post(DRAFT_ORDERS, {
			draft_order: {
				email: customer.email,
				note: customer.phone,
				customer: {
						...customer
				},
				shipping_address,
				line_items,
			},
		})
	
		return { ...response, success: true };

	} catch (error) {

		return { data: { message: error.message }, success: false }

	}
}

exports.handler = async function(event) {

  // Parse the body contents into an object.
	const data = JSON.parse(event.body)

  const { customer, line_items, shipping_address } = data
			 
	const response = await submitDraftOrder(customer, line_items, shipping_address)

	return {
				statusCode: response.success ? STATUS_CODE.OK : STATUS_CODE.BAD,
				success: response.success,
				body: JSON.stringify({ ...response.data }),
	}


}
