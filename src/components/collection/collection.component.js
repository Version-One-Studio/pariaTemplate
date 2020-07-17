import React from 'react';
import {
	Container,
	Title,
	ProductList,
	ViewCollectionButton
} from './collection.styles';
import Product from '../product/product.component';
import backpack1 from '../../images/backpack1.png';
import backpack2 from '../../images/backpack2.png';
import backpack3 from '../../images/backpack3.png';

const products = [
	{
		title: "The Argyle Falls Backpack",
		price: "250.00",
		img: backpack1
	},
	{
		title: "The BALANDRA BASIN Backpack",
		price: "350.00",
		img: backpack2
	},
	{
		title: "The PEECHON COVE Backpack",
		price: "190.00",
		img: backpack3
	},

]

const Collection = () => {
	return(
		<Container>
		<Title>Shop the Waterfall Collection</Title>
		<ProductList>
			{
				products.map((product, index) => (
					<Product product={product} key={index}/>
				))
			}
		</ProductList>
		
		<ViewCollectionButton>See all from this collection</ViewCollectionButton>
		</Container>
	)
}

export default Collection;

