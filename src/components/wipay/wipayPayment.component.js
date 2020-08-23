import React from 'react'

const WipayPayment = React.forwardRef((props, ref) => {

	const DEVELOPER_ID = process.env.GATSBY_WIPAY_DEVELOPER_ID;

	const WIPAY_URL = process.env.GATSBY_WIPAY_URL;

	const { amount, phone, email, name, orderId, returnUrl } = props;
    return (
        <form
            style={
							{ marginBottom: 0 }
						}
            action={WIPAY_URL}
						method="post"
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
            />
            <input name="developer_id" type="hidden" value={DEVELOPER_ID} />
        </form>
    )
})

export default WipayPayment