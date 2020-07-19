import styled from 'styled-components';

export const Container = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`;

export const Img = styled.img`
display: flex;
width: 100%;
height: 180px;
object-fit: cover;
object-position: center center;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr 1fr;
	align-items: center;
`;
export const Details = styled.div`
padding: 0 20px;
letter-spacing: 0px;
color: #2C2C2C;
`;

export const Title = styled.h1`
width: 381px;
height: 33px;
text-align: left;
font: 700 24px/58px Avenir Next;
`;
export const Price = styled.p`
margin-top: 0px;
width: 78px;
height: 27px;
text-align: left;
font: 600 20px/30px Avenir Next;
opacity: 0.79;
margin-bottom: 10px;
`;

export const Style = styled.p`
margin-top: 16px;
height: 27px;
text-align: left;
font: 600 16px/24px Avenir Next;
opacity: 0.79;
`;

export const RemoveFromCart = styled.h1`
text-decoration: underline;
cursor: pointer;
text-align: center;
transition: all 0.3s ease-in-out;

:hover{
	color: red;
	transform-origin: center;
	transform: scale(1.1);
}
`;
