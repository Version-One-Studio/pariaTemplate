import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import collection1 from '../../images/collection1.png';
import collection2 from '../../images/collection2.png';
import collection3 from '../../images/collection3.png';

const collections = [
	{
		title: 'The Adventurer Collection',
		src: collection1

	},
	{
		title: 'The Nomad Collection',
		src: collection2

	},
	{
		title: 'The Trekker Collection',
		src: collection3

	},
]

const CollectionDisplayItem = ({ collection }) => {
	return (
		<Wrapper>
				<Img src={collection.src}></Img>
				<Button>{collection.title}</Button>
		</Wrapper>
	)
}

const CollectionDisplay = () => {

	const { allShopifyCollection } = useStaticQuery(
    graphql`
		query {
			allShopifyCollection {
				nodes {
					title
					shopifyId
					image {
						id
						src
					}
				}
			}
		}
    `
  )


	// allShopifyCollection.nodes.map((node) => {
	// 	<CollectionDisplayItem collection={collection} key={node.shopifyId}/>
	// }) 

	return (
		<Container>
			{
				collections.map(( collection, index ) => (
					<CollectionDisplayItem collection={collection} key={index}/>
				))

			}
		</Container>
	)
}

export default CollectionDisplay;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 400px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`;


const Wrapper = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
height: 100%;
`;

const Img = styled.img`
filter: contrast(75%);
width: 100%;
height: 100%;
object-fit: cover;
`;

const Button = styled.button`
position: absolute;
align-self: center;
background-color: #000000;
font-size: 16px;
font-weight: 500;
min-width: 246px;
color: #ffffff;
height: 54px;
text-transform: uppercase;
border: none;
padding: 10px 10px;
box-shadow: 0 20px 40px rgba(0,0,0, 0.25);
cursor: pointer;
outline: none;
transition: transform 0.3s ease-in-out;

:hover {
	transform: scale(1.1);
}
`;