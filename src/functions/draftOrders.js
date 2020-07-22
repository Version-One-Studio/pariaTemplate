
//MUST REQUIRE THIS IN ORDER TO ACCESS PROCESS ENV
require("dotenv").config()
const axios = require('axios');

const DRAFT_ORDERS ='draft_orders.json';
const statusCode = 200

//Create axios instance
const shopifyInstance = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_PASSWORD}@${process.env.SHOPIFY_NAME}.myshopify.com/admin/api/2020-04/`,
    headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_PASSWORD,
        "Access-Control-Allow-Origin": "*",
    },
})

exports.handler = async function(event) {

    // Parse the body contents into an object.
	const data = JSON.parse(event.body)
    const {
		customer,
		line_items
	} = data
	
    try {
        const response = await shopifyInstance.post(DRAFT_ORDERS, {
            draft_order: {
				email: customer.email,
                phone: customer.phone,
                customer: {
                    ...customer
                },
                line_items,
            },
		})
		
        return {
            statusCode,
            success: true,
            data: "Success",
            body: JSON.stringify({...response.data.draft_order}),
        }
    } catch (err) {
        console.log(err.message)
        return {
            statusCode,
            headers,
            success: false,
            body: err.message,
        }
    }

}
