import styled from 'styled-components';

export const Container = styled.div`
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding-left: 20px;
padding-right: 20px;
`;

export const ProductList = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 20px;
`;

export const Title = styled.h1`
font-size: 30px;
font-weight: bold;
line-height: 58px;
color: #2C2C2C;
text-align: center;
margin-top: 50px;
`;

export const ViewCollectionButton = styled.button`
background-color: #000;
display: block;
cursor: pointer;
margin-top: 50px;
margin-bottom: 50px;
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