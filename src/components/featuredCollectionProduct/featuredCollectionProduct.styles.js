import styled from 'styled-components';
import * as margins from '../../theme/margins';

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-rows: 80% 1fr;
justify-items: center;
margin-bottom: ${margins.marginMedium};
`;

export const ImgContainer = styled.div`
display: flex;
max-height: 400px;
`;

export const ProductImg = styled.img`
object-fit: cover;
`;

export const Caption = styled.div`
text-align: center;
height: 100%;
`;

export const Title = styled.p`
color: #555555;
font-size: 17px;
font-weight: 700;
text-transform: uppercase;
margin-top: 20px;
text-align: left;
`;

export const Price = styled.p`
font-size: 26px;
font-weight: bold;
color: #2C2C2C;
`;