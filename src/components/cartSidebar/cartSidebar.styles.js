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
right: 20px;
z-index: 5;
`;

export const Items = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`;

export const CartEmptyText = styled.p``;