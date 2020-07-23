exports.handler = async function(event) {
			return {
					statusCode: 200,
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Headers": "Content-Type"
					},
					success: true,
					data: "Success",
					body: JSON.stringify({message: 'Hello World'})
			}
	

}
