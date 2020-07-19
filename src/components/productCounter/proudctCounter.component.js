import React from 'react';
import {
	Container,
	Minus,
	Count,
	Plus
} from './productCounter.styles';

const ProductCounter = ({handleMinus, handleAdd, count}) => {
	return(
		<Container>
			<Minus onClick={() => handleMinus()}>–</Minus>
			<Count>{count}</Count>
			<Plus onClick={() => handleAdd()}>+</Plus>
	</Container>
	)
}

export default ProductCounter