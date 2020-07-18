import React from 'react';
import {
	Container,
	Button
} from './primaryButton.styles';

const PrimaryButton = ({ text, width, marginTop, marginRight, marginBottom, marginLeft, clickHandler }) => {

	return (
		<Container 
			marginTop={marginTop}
			marginRight={marginRight}
			marginBottom={marginBottom}
			marginLeft={marginLeft}
		>

			<Button onClick={() => clickHandler()} width={width}>
				{text}
			</Button>
		</Container>
	)
}

export default PrimaryButton;

