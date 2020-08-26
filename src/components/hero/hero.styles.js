import styled from 'styled-components';
import { largeScreen } from '../../theme/screenSizes';

export const Container = styled.div`
width: 100%;
min-height: 505px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
max-width: ${largeScreen};
margin-left: auto;
margin-right: auto;
`;
export const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 400px;
max-height: 500px;
height: 100%;
padding-left: 40px;
padding-right: 40px;
background-color: #EDEDED;

@media only screen and (max-width: 800px) {
  order: 2;
}

`;

export const Kicker = styled.p`
color: #5D5D5D;
font-size: 18px;
font-weight: 500;
font-family: 'Avenir Next';
`;

export const Title = styled.p`
font-family: 'Avenir Next';
font-size: 50px;
font-weight: bold;
line-height: 58px;
margin-top: 22px;
`;

export const Subtitle = styled.p`
font-size: 18px;
font-weight: 500;
color: #5D5D5D;
margin-top: 22px;
`;

export const ShopNowButton = styled.button`
width: 137px;
height: 54px;
background-color: #000000;
color: #fff;
margin-top: 22px;
cursor: pointer;
border: none;
box-shadow: 0 4px 40px rgba(0,0,0,0.25);
transition: transform 0.3s ease-in-out;

:hover {
	transform: scale(1.1);
}
`;

export const Right = styled.div`
display: flex;
height: 100%;
max-height: 500px;
`;

export const HeroImg = styled.img`
object-fit: cover;
`;