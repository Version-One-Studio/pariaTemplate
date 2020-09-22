import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby'
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

const collectionFakes = [
	{
		node: {
			title: 'The Adventurer Collection',
			image: {src: collection1}
	}

	},
	{
		node: {
			title: 'The Nomad Collection',
			image: { src: collection2 }
		}

	},
	{
	node: {	title: 'The Trekker Collection',
		image: { src: collection3 }
	}
	},
]

const CollectionDisplayItem = ({ collection }) => {
	return (
		<Wrapper>
				<Img src={collection.image.src}></Img>
				<Button>
					<PrimaryButton text={collection.title} width='100%' clickHandler={() => navigate(`/shop?handle=${collection.handle}`)}/>
				</Button>
		</Wrapper>
	)
}

const Collection = () => {

	const { allShopifyCollection } = useStaticQuery(graphql`
	query DisplayCollectionsQuery {
		allShopifyCollection(limit: 4) {
			edges {
				node {
					handle
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

  let edges = allShopifyCollection.edges.length > 0 ? allShopifyCollection.edges : collectionFakes

	const collections = edges.filter( ({ node }) => node.title.indexOf('Featured') === -1)

	return (
		<Container>
			{
				collections.map(( { node }, index ) => (
					<CollectionDisplayItem collection={node} key={index}/>
				))

			}
		</Container>
	)
}

export default Collection;