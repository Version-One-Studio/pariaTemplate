import styled from 'styled-components';
import { largeScreen } from '../../theme/screenSizes';

export const Container = styled.div`
width: 100%;
min-height: 300px;
background-color: #F5F5F5;
text-align: center;
padding: 40px;
max-width: ${largeScreen};
margin-left: auto;
margin-right: auto;
`;

export const Title = styled.h1`
font-size: 32px;
font-weight: bold;
color: #2C2C2C;
`;

export const Description = styled.p`
font-size: 26px;
font-weight: 400;
color: #2C2C2C;
`;