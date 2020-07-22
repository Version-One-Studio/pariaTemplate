import atob from "atob"

export function convertShopifyId(id) {
    const convertedString = atob(id)
    const trimmedString = convertedString.substr(29, convertedString.length)
    return trimmedString
}

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "TTD",
})

export const numberToCurrency = price => {
    return formatter.format(price)
}
