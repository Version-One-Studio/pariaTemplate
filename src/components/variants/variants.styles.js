import styled from 'styled-components';

export const Container = styled.div`
margin-top: 20px;
display: flex;
width: 100%;

>*:nth-child(2){
	margin-left: 20px;
}

@media only screen and (max-width: 800px) {
			flex-direction: column;

			>*:nth-child(2){
				margin-left: 0px;
			}
	}
`;

export const VariantSelect = styled.div`
max-width: 314px;
min-width: 200px;
height: 57px;

@media only screen and (max-width: 800px) {
	max-width: 100%;

	}
`;


