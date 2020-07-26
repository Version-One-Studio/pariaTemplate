import styled from 'styled-components';
import * as screen from '../../theme/screenSizes';

export const Container = styled.section`
    max-width: 550px;
    grid-column: ${({showIntermittentLoader}) => showIntermittentLoader ? '1/4' : '2/4'};
		position: ${({showIntermittentLoader}) => showIntermittentLoader ? 'absolute' : 'relative'};
		height: 100%;
		

		@media only screen and (max-width: ${screen.smallScreen}) {
			width: 300px;
			grid-column: 1;
			margin: 0;
			justify-self: center;
		}
`;

export const OrderTotalBreakdown = styled.div`
    margin-top: 25px;
    margin-bottom: 30px;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${props => props.last ? '20px' : '5px'};
`;
export const Label = styled.p`
    margin: 0;
    font-size: 22px;
    font-weight: ${props => props.total ? 500 : 'normal'};
    font-family: "Avenir Next";
    font-weight: 600;
`;

export const WipayLoaderContainer = styled.div`
/* position: absolute;
grid-column: 1/4;
justify-self: center; */
width: 100vw;
height: 100%;
background-color: rgba(255, 255, 255, 0.8);
`;