import React, { useReducer, useContext, useEffect } from 'react';
import {
	ADD_ITEM_TO_CART, 
	REMOVE_ITEM_FROM_CART,
	TOGGLE_SIDEBAR_HIDDEN 
} from './actionTypes';

const GlobalStateContext = React.createContext()
const GloablDispatchContext = React.createContext()

const initialState = {
	shoppingCart: [],
	products: [],
	total: 0,
	sidebarHidden: true
}

const handleAddToCart = (state, item, count) => {
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

	const existingCartItem = cartItems.find(
		cartItem => cartItem.shopifyId === itemToRemove.shopifyId
	);

	// If the item to remove is at count 1, filter it out from the array
	if(existingCartItem.count === 1) return cartItems.filter(cartItem => cartItem.shopifyId !== itemToRemove.shopifyId)

	// Map over the items and decrease the item to Remove count by 1
	return cartItems.map( cartItem => (
		cartItem.shopifyId === itemToRemove.shopifyId 
		? { ...cartItem, count: cartItem.count - 1 }
		: cartItem
	))
}


const cartReducer = (state, action) => {
	switch (action.type) {

		case ADD_ITEM_TO_CART: {
			return {...state, shoppingCart: handleAddToCart(state, action.item, action.count)}
		}

		case REMOVE_ITEM_FROM_CART: {
			return {
				...state,
				cartItems: [...state.cartItems].splice([...state.cartItems].indexOf(action.payload), 1)
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