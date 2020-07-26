import styled from 'styled-components';
import PrimaryButton from '../primaryButton/primaryButton.component';

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`;


export const Wrapper = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
height: 100%;
min-height:500px;
`;

export const Img = styled.img`
filter: contrast(75%);
width: 100%;
height: 100%;
object-fit: cover;
`;

export const Button = styled.div`
position: absolute;
align-self: center;
min-width: 246px;
`;