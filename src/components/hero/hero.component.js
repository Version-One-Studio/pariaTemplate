import React from 'react';
import {
	Container,
	Left,
	Right,
	Kicker,
	Title,
	Subtitle,
	ShopNowButton,
	HeroImg
} from './hero.styles';
import heroImg from '../../images/heroimg.png';

const Hero = () => {
	return (
		<Container>
			 <Left>
				 <Kicker>Newest Arrival</Kicker>
				 <Title>The Paria Bay Backpack</Title>
				 <Subtitle>Gauranteed to survive with you through the hardest journeys</Subtitle>
				 <ShopNowButton>Shop Now</ShopNowButton>
			 </Left>
			 <Right>
				 <HeroImg src={heroImg} />
			 </Right>
		</Container>
	)
}

export default Hero;




