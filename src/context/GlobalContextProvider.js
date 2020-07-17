import React, { useReducer, useContext } from 'react';
import {
	ADD_ITEM_TO_CART, 
	REMOVE_ITEM_FROM_CART 
} from './actionTypes';

const GlobalStateContext = React.createContext()
const GloablDispatchContext = React.createContext()

const initialState = {
	cartItems: [],
	products: [],
	total: 0
}

const cartReducer = (state, action) => {
	switch (action.type) {

		case ADD_ITEM_TO_CART: {
			return {
				...state,
				cartItems: [...state.cartItems].push(action.payload)
			}
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