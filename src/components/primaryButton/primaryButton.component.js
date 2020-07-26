import React from 'react';
import {
	Container,
	Button
} from './primaryButton.styles';

const PrimaryButton = ({ disabled, text, width, marginTop, marginRight, marginBottom, marginLeft, clickHandler }) => {

	return (
		<Container 
			marginTop={marginTop}
			marginRight={marginRight}
			marginBottom={marginBottom}
			marginLeft={marginLeft}
			width={width}
		>

			<Button disabled={disabled} onClick={() => clickHandler()} width={width}>
				{text}
			</Button>
		</Container>
	)
}

export default PrimaryButton;

