import React from 'react';
import {
	Container,
	Left,
	Right,
	Kicker,
	Title,
	Subtitle,
	HeroImg
} from './hero.styles';
import heroImg from '../../images/heroimg.png';
import PrimaryButton from '../primaryButton/primaryButton.component';
import { navigate, useStaticQuery } from 'gatsby';

const Hero = () => {

	const { allShopifyCollection: 
		{ 
			edges: [firstNode] 
		} 
	} = useStaticQuery(graphql`
	query HeroCollectionsQuery {
		allShopifyCollection(sort: {order: DESC, fields: updatedAt}) {
			edges {
				node {
					description
					handle
					id
					image {
						src
					}
					title
				}
			}
		}
	}
	`);

	const collection = firstNode.node;

	console.log(collection);

	return (
		<Container>
			 <Left>
				 <Kicker>Newest Arrival</Kicker>
					<Title>{collection.title}</Title>
				 <Subtitle>{collection.description}</Subtitle>
				<PrimaryButton text='Shop Now' marginTop='22px' width='137px' clickHandler={() => navigate('/shop')}/>
			 </Left>
			 <Right>
				 <HeroImg src={collection.image.src} />
			 </Right>
		</Container>
	)
}

export default Hero;




