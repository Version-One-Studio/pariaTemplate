import styled from 'styled-components';
import * as margins from '../../theme/margins';
import * as colors from '../../theme/colors';

export const Container = styled.div`
width: 100%;

@media screen and (max-width: 600px) {
  max-width: 100%;

}
`;

export const ProductImage = styled.div`
width: 100%;
height: 600px;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center center;
`;

export const Caption = styled.div`
margin-top: ${margins.marginMedium};
`;

export const Title = styled.h3`
text-align: left;
font: 500 17px/19px 'Futura PT';
letter-spacing: 0px;
color: ${colors.grey};
opacity: 0.8;
`;

export const Price = styled.h3`
margin-top: ${margins.marginXSmall};
text-align: left;
font: 300 17px/19px 'Futura PT';
letter-spacing: 0px;
color: ${colors.grey};
opacity: 0.6;
`;