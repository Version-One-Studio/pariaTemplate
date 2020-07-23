const axios = require("axios")

const statusCode = 200
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
}

//Create axios instance
const shopifyInstance = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_PASSWORD}@${process.env.SHOPIFY_NAME}.myshopify.com/admin/api/2020-07/`,
    headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_PASSWORD,
        "Access-Control-Allow-Origin": "*",
    },
})

exports.handler = async function(event) {

		console.log('in complete order handler');
    // Parse the body contents into an object.
		const data = JSON.parse(event.body)

		console.log("DATA Printed")
		console.log(data);

    const {
				orderId
    } = data
    
    try {
        const response = await shopifyInstance.put(
            `draft_orders/${orderId}/complete.json`
        )

        return {
            statusCode,
            success: true,
            data: "Success",
            body: JSON.stringify({ ...response.data.draft_order })
        }
    } catch (err) {
        return {
            statusCode,
            headers,
            success: false,
            body: err.message,
        }
    }

}
