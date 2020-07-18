import React from 'react'

export const usePrice = (quantity, variantPrice) => {

    const total = (quantity * parseFloat(variantPrice)).toFixed(2)
    
    return { total }

}
