import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import {
	Container,
	Wrapper,
	Img,
	Button
} from './collections.styles';
import collection1 from '../../images/collection1.png';
import collection2 from '../../images/collection2.png';
import collection3 from '../../images/collection3.png';
import PrimaryButton from '../primaryButton/primaryButton.component';

const collectionsOld = [
	{
		node: {
			title: 'The Adventurer Collection',
			image: {src: collection1}
	}

	},
	{
		node: {title: 'The Nomad Collection',
		image: {src: collection2}}

	},
	{
	node: {	title: 'The Trekker Collection',
		image: {src: collection3}}

	},
]

const CollectionDisplayItem = ({ collection }) => {
	return (
		<Wrapper>
				<Img src={collection.image.src}></Img>
				<Button>
					<PrimaryButton text={collection.title} width='100%' />
				</Button>
		</Wrapper>
	)
}

const Collection = () => {

	const { allShopifyCollection: { edges } } = useStaticQuery(graphql`
	query DisplayCollectionsQuery {
		allShopifyCollection(limit: 4) {
			edges {
				node {
					title
					image {
						src
					}
					id
				}
			}
		}
	}
	`);


	const collections = edges.filter( ({ node }) => node.title.indexOf('Featured') === -1)

	return (
		<Container>
			{
				collectionsOld.map(( { node }, index ) => (
					<CollectionDisplayItem collection={node} key={index}/>
				))

			}
		</Container>
	)
}

export default Collection;