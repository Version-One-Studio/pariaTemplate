
import styled from 'styled-components';

export const Container = styled.div`
width: 165px;
height: 48px;
display: grid;
grid-template-columns: 1fr 1.5fr 1fr;
border: 2px solid #484848;
align-items: center;
justify-items: center;
margin-bottom: 20px;
`;

export const Count = styled.div`
font: 600 21px/37px Avenir Next;
letter-spacing: 0px;
color: #2C2C2C;
opacity: 1;
`;

export const Minus = styled.div`
font-size: 25px;
font-weight: bold;
opacity: 0.8;
padding: 0 10px;
justify-self: flex-end;
cursor: pointer;
`;

export const Plus = styled.div`
font-size: 20px;
font-weight: bold;
opacity: 0.8;
padding: 0 10px;
justify-self: flex-start;
cursor: pointer;
`;