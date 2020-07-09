import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 505px;
display: grid;
grid-template-columns: 50% 50%;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`;
export const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
padding-left: 40px;
padding-right: 40px;
background-color: #EDEDED;
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
`;

export const HeroImg = styled.img`
object-fit: cover;
`;