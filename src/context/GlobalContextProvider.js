import React, { useReducer, useContext, useEffect } from 'react';
import {
	ADD_ITEM_TO_CART, 
	REMOVE_ITEM_FROM_CART,
	TOGGLE_SIDEBAR_HIDDEN, 
	CLEAR_CART,
	CREATE_LINE_ITEMS_FROM_CART
} from './actionTypes';

const GlobalStateContext = React.createContext()
const GloablDispatchContext = React.createContext()

const initialState = {
	shoppingCart: [],
	lineItems: [],
	total: 0,
	sidebarHidden: true
}

const handleUpdateCart = (state, item, count) => {
	//Check if already in cart, increase count
	//If not, add to cart
	let shoppingCart = []
	//Checking for index
	let index = state.shoppingCart.findIndex(el => el.shopifyId === item.shopifyId)

	//Not found, add it to shoppingCart
	if (index === -1) return shoppingCart = [...state.shoppingCart, {...item, count: count}]

	//Update the count or edit the selected option
	shoppingCart = [...state.shoppingCart]
	shoppingCart[index] = {...shoppingCart[index], count: count}
	console.log(shoppingCart)
	return shoppingCart
}

const handleRemoveFromCart = (cartItems, itemToRemove) => {

	return cartItems.filter(cartItem => cartItem.shopifyId !== itemToRemove.shopifyId)
}

const handleClearCart = () => {

	window && window.localStorage.removeItem('state');
	return []
}

const handleCreateLineItems = (shoppingCart) => {
	return shoppingCart.map(item => {
		const lineitem = {
			variant_id: item.shopifyId,
			quantity: item.count,
			title: item.title,
			price: item.price
		}

		return lineitem
	})
}


const cartReducer = (state, action) => {
	switch (action.type) {

		case ADD_ITEM_TO_CART: {
			return {...state, shoppingCart: handleUpdateCart(state, action.item, action.count)}
		}

		case REMOVE_ITEM_FROM_CART: {
			return {
				...state,
				shoppingCart: handleRemoveFromCart(state.shoppingCart, action.item)
			}
		}	

		case CLEAR_CART: {
			return {
				...state,
				shoppingCart: handleClearCart()
			}
		}

		case CREATE_LINE_ITEMS_FROM_CART: {
			return {
				...state,
				lineItems: handleCreateLineItems(state.shoppingCart)
			}
		}

		case TOGGLE_SIDEBAR_HIDDEN: {
			return {
				...state,
				sidebarHidden: !state.sidebarHidden
			}
		}
	
		default:
			return {...state};
	}
}

const GlobalContextProvider = ({ children }) => {

	const localState = JSON.parse(window && window.localStorage.getItem("state"));

	const[state, dispatch] = useReducer(cartReducer, localState || initialState);

	useEffect(() => {
    window && window.localStorage.setItem("state", JSON.stringify(state));
	}, [state]);

	return (
		<GlobalStateContext.Provider value={state}>
			<GloablDispatchContext.Provider value={dispatch}>
				{children}
			</GloablDispatchContext.Provider>
			</GlobalStateContext.Provider>
	)
}

export const useGlobalState = () => {

	const context = useContext(GlobalStateContext)

	if(context === undefined) {
		throw new Error('useGlobalState must be used within a GlobalContextProvider')
	}
	return context

}

export const useGlobalDisptach = () => {
	
	const context = useContext(GloablDispatchContext)
	
	if(context === undefined) {
		throw new Error('useGlobalDispatch must be used within a GlobalContextProvider')
	}

	return context;
}

export default GlobalContextProvider;