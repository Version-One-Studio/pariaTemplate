import React from 'react'

export const usePrice = (quantity, variantPrice) => {

    const total = (quantity * parseFloat(variantPrice)).toFixed(2)
    
    return { total }

}

export const useTotal = (cart, deliveryCost) => {

    //Make sure the cart isn't empty
    if (!cart.length) {
        return 0
    }

    //Get totals in an array
    const prices = cart.map(el => (el.count * el.price))

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const orderTotal = prices.reduce(reducer, deliveryCost).toFixed(2)


    return { orderSubtotal: parseFloat(orderTotal - deliveryCost).toFixed(2), orderTotal }
    
}
