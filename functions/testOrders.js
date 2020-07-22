exports.handler = async function(event) {
			return {
					statusCode: 200,
					success: true,
					data: "Success",
					body: JSON.stringify({message: 'Hello World'})
			}
	

}
