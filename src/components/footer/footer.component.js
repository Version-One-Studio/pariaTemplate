import React from 'react';
import {
	Container,
	MailingList,
	InputField,
	Button,
	Text,
	Policies,
	Policy,
	ImageContainer,
	Img,
	Caption
} from './footer.styles';
import wipayIcon from '../../images/wipay-icon.png';

const Footer = () => {
	return (
			<Container>
				{/* <MailingList>
					<InputField 
						type='text'
						placeholder="Email Address"
					/>
					<Button 
						type='submit'
					/>
				</MailingList>
				<Text>Be the first to know about our newest collections and discounts</Text> */}

				<Policies>
					<Policy>Privacy Policy</Policy>
					<Policy>Return Policy</Policy>
					<Policy>Shipping Policy</Policy>
					<Policy>FAQ</Policy>
				</Policies>

				<ImageContainer>
					<Img src={wipayIcon} />
				</ImageContainer>

				<Caption>Powered by Wipay Caribbean</Caption>
			</Container>
	)
}

export default Footer;

