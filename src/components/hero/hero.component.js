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
import PrimaryButton from '../primaryButton/primaryButton.component';

const Hero = () => {
	return (
		<Container>
			 <Left>
				 <Kicker>Newest Arrival</Kicker>
				 <Title>The Paria Bay Backpack</Title>
				 <Subtitle>Gauranteed to survive with you through the hardest journeys</Subtitle>
				<PrimaryButton text='Shop Now' marginTop='22px' width='137px' />
			 </Left>
			 <Right>
				 <HeroImg src={heroImg} />
			 </Right>
		</Container>
	)
}

export default Hero;




