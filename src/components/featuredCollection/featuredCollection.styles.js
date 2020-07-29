import styled from 'styled-components';
import * as margins from '../../theme/margins';
import * as colors from '../../theme/colors';
import { largeScreen } from '../../theme/screenSizes';

export const Container = styled.div`
max-width: ${largeScreen};
margin-left: auto;
margin-right: auto;
padding-left: 20px;
padding-right: 20px;
`;

export const ProductList = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap:${margins.marginSmall};
grid-row-gap: ${margins.marginLarge};
`;

export const Title = styled.h1`
font-size: 30px;
font-weight: bold;
line-height: 58px;
color: ${colors.darkGrey};
text-align: center;
margin-top: 50px;
`;

export const ViewCollectionButton = styled.button`
background-color: #000;
display: block;
cursor: pointer;
margin-top: ${margins.marginMedium};
margin-bottom: ${margins.marginMedium};
width: 315px;
height: 54px;
color: white;
border: none;
margin-left: auto;
margin-right: auto;
text-transform: uppercase;
box-shadow: 0 4px 40px rgba(0,0,0, 0.25);
transition: transform 0.3s ease-in-out;

:hover {
	transform: scale(1.1);
}
`;