import React, { useReducer, useContext } from 'react';
import {
	ADD_ITEM_TO_CART, 
	REMOVE_ITEM_FROM_CART 
} from './actionTypes';

const GlobalStateContext = React.createContext()
const GloablDispatchContext = React.createContext()

const initialState = {
	shoppingCart: [],
	products: [],
	total: 0
}

const handleAddToCart = (state, item, count) => {
	//Check if already in cart, increase count
	//If not, add to cart
	let shoppingCart = []
	//Checking for index
	let index = state.shoppingCart.findIndex(el => el.shopifyId === item.shopifyId)

	//Not found, add it to shoppingCart
	if (index === -1) {
		shoppingCart = [...state.shoppingCart, {...item, count: count}]
	}else {
        //Update the count or edit the selected option
        shoppingCart = state.shoppingCart
        shoppingCart[index] = {...shoppingCart[index], count: count}
	}
	console.log(shoppingCart)
	return shoppingCart
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
	
		default:
			return {...state};
	}
}

const GlobalContextProvider = ({ children }) => {

	const[state, dispatch] = useReducer(cartReducer, initialState);

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