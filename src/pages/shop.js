import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Product from '../components/product/product.component';
import Layout from '../components/layout/layout.js';
import * as colors from '../theme/colors';
import { marginSmall, marginLarge, marginMedium } from '../theme/margins';
import { largeScreen, mediumScreen } from '../theme/screenSizes';

const Shop = () => {

	const { allShopifyCollection: { edges } } = useStaticQuery(graphql`
	query ShopCollectionsQuery {
		allShopifyCollection {
			edges {
				node {
					title
					id
					products {
						availableForSale
						id
						images {
							originalSrc
						}
						priceRange {
							minVariantPrice {
								amount
							}
						}
						shopifyId
						title
						handle
					}
				}
			}
		}
	}
	`);

	const handleTabSelect = (index) => {
		console.log(`Tab Selected ${index}`);
		setSelectedTab(index);
	}

	const [selectedTab, setSelectedTab] = useState(0);

	const { node: { products } } = edges[selectedTab];
	
	return (
		<Layout>
			<Container>
				<Tabs>
					{edges.map(({ node }, index) => (
						<Category key={node.id} onClick={() => handleTabSelect(index)}>
							{
							node.title.indexOf('Featured') === -1 ? node.title : node.title.slice(8)
							}
							</Category>
					))}
				</Tabs>
				<ProductList>
					{
						products.length > 0 ?
						products.map(product => <Product product={product} key={product.id}/>)
						:
						<h1>No Products to show</h1>
					}
				</ProductList>
			</Container>
		</Layout>
	)
}

export default Shop;

const Container = styled.div`
display: grid;
max-width: ${largeScreen};
grid-template-columns: 20% 1fr;
margin-top: ${marginLarge};
margin-bottom: ${marginLarge};
margin-left: auto;
margin-right: auto;

@media screen and (max-width: ${mediumScreen}) {
  grid-template-columns: 1fr;
	padding: 0px 20px;
}
`;

const Category = styled.h3`
text-align: left;
font: 500 16px/19px 'Futura PT';
letter-spacing: 0px;
color: ${colors.darkGrey};
opacity: 0.8;
padding: 0 20px;

@media screen and (max-width: ${mediumScreen}) {
  padding: 10px 20px;
	box-shadow: 0px 10px 20px rgba(0,0,0,0.25);
	background-color: ${colors.darkGrey};
	color: ${colors.white};
	display: flex;
	align-items: center;

	cursor: pointer;
	:not(:first-child) {
		margin-left: ${marginMedium};
	}

}
`;

const Tabs = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(auto-fill, minmax(20px, 20px));
grid-row-gap: ${marginSmall} ;
max-width: 400px;
overflow: scroll;

@media screen and (max-width: ${mediumScreen}) {
  display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${marginMedium};
	max-width: 100%;
}
`;

const ProductList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap: ${marginMedium};
grid-row-gap: ${marginLarge};
`;