import React from 'react';
import { useStaticQuery, graphql, navigate } from "gatsby";
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
	const { shopifyCollection, allShopifyCollection } = useStaticQuery(graphql`
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
		allShopifyCollection(sort: {order: DESC, fields: updatedAt}, limit: 1) {
			edges {
				node {
					description
					handle
					id
					image {
						src
					}
					title
					products {
						availableForSale
						description
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
		}
	}
	`);

	let collection = shopifyCollection === null ? allShopifyCollection.edges[0].node : shopifyCollection

	let products = collection.products.length > 0 ? collection.products : productsOld

	let title = collection.title.indexOf('Featured') === -1 ? collection.title : collection.title.slice(8);

	return(
		<Container>
		<Title>Shop the {title}</Title>
		<ProductList>
			{
				products.slice(0,3).map((product, index) => (
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
			clickHandler={() => navigate(`/shop?handle=${collection.handle}`)}

		/>
		</Container>
	)
}

export default FeaturedCollection;

