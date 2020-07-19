import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 100px;
right: 50px;
z-index: 5;
`;

export const Items = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`;

export const CartEmptyText = styled.p`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font: 600 20px/37px 'Avenir Next';
letter-spacing: 0px;
color: #2C2C2C;
opacity: 0.79;
`;