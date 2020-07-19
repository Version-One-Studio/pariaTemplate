import React from 'react'


const WipayPayment = React.forwardRef((props, ref) => {

	const { amount, phone, email, name, orderId, returnUrl } = props;
    // const ACTION_URL = process.env.NODE_ENV === "development" ? 'https://sandbox.wipayfinancial.com/v1/gateway' : 'https://wipayfinancial.com/v1/gateway_live'

    return (
        <form
            style={{ marginBottom: 0 }}
            action="https://sandbox.wipayfinancial.com/v1/gateway"
						method="post"
						id='wipayform'
            // ref={(ref) => { paymentFormRef = ref; }}
            ref={ref}
        >
            <input
                name="total"
                type="hidden"
                value={amount}
            />
            <input
                name="phone"
                type="hidden"
                value={phone}
            />
            <input name="email" type="hidden" value={email} />
            <input name="name" type="hidden" value={name} />
            <input name="order_id" type="hidden" value={orderId} />
            <input
                name="return_url"
                type="hidden"
                value={returnUrl}
                // value={`http://localhost:8000/payment-success`}
                // value={`https://upbeat-goldberg-8db28b.netlify.com/shop/order-confirmation/`}
            />
            <input name="developer_id" type="hidden" value="1" />
        </form>
    )
})

export default WipayPayment