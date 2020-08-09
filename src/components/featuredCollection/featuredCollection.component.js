import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import {
	Container,
	Title,
	ProductList
} from './featuredCollection.styles';
import FeaturedCollectionProduct from '../featuredCollectionProduct/featuredCollectionProduct.component';
import backpack1 from '../../images/backpack1.png';
import backpack2 from '../../images/backpack2.png';
import backpack3 from '../../images/backpack3.png';
import PrimaryButton from '../primaryButton/primaryButton.component';
import { marginMedium } from '../../theme/margins';

const productsOld = [
	{
		title: "The Argyle Falls Backpack",
		priceRange: {minVariantPrice: {
			amount: "250.00"}
		},
		images: [ { originalSrc: backpack1 } ]
	},
	{
		title: "The BALANDRA BASIN Backpack",
		priceRange: {minVariantPrice: {
			amount: "350.00"}
		},
		images: [ { originalSrc: backpack2 }]
	},
	{
		title: "The PEECHON COVE Backpack",
		priceRange: {minVariantPrice: {amount: "190.00"}
	},
		images: [ { originalSrc: backpack3 }]
	},

]

const FeaturedCollection = () => {
	const { shopifyCollection: { products } } = useStaticQuery(graphql`
	query FeaturedCollectionProductQuery {
		shopifyCollection(title: {regex: "/Featured/"}) {
			title
			description
			handle
			shopifyId
			id
			products {
				availableForSale
				description
				id
				images {
					originalSrc
				}
				title
				priceRange {
					minVariantPrice {
						amount
					}
				}
			}
		}
	}
	`);
	return(
		<Container>
		<Title>Shop the Waterfall Collection</Title>
		<ProductList>
			{
				productsOld.slice(0,4).map((product, index) => (
					<FeaturedCollectionProduct product={product} key={index}/>
				))
			}
		</ProductList>
		
		<PrimaryButton 
			text="See all from this collection" 
			width="315px" 
			marginTop={marginMedium} 
			marginBottom={marginMedium} 	
			marginLeft='auto'
			marginRight='auto'
		/>
		</Container>
	)
}

export default FeaturedCollection;

