import React from 'react';
import {
	Container,
	Button
} from './primaryButton.styles';

const PrimaryButton = ({ text, width, marginTop, marginRight, marginBottom, marginLeft }) => {

	return (
		<Container 
			marginTop={marginTop}
			marginRight={marginRight}
			marginBottom={marginBottom}
			marginLeft={marginLeft}
		>

			<Button width={width}>
				{text}
			</Button>
		</Container>
	)
}

export default PrimaryButton;

