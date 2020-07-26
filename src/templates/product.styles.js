import styled from 'styled-components';
import { marginMedium } from '../theme/margins';

export const Container = styled.section`
    padding: 10vh 40px;
`
export const Grid = styled.section`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-column-gap: ${marginMedium};

		@media only screen and (max-width: 800px) {
			grid-template-columns: 1fr;
			justify-items: center;
		}

`
export const ImageContainer = styled.div`
max-width: 500px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const Content = styled.div`
text-align: left;
color: #2C2C2C;
max-width: 476px;
width: 100%;

@media only screen and (max-width: 800px) {
			margin-top: ${marginMedium};
	}
`
export const Name = styled.h3`
font: Bold 30px/58px Avenir Next;
letter-spacing: 0px;
opacity: 1;
min-height: 41px;
`
export const Description = styled.p`
margin-top: 20px;
text-align: left;
font: 400 21px/37px Avenir Next;
letter-spacing: 0px;
opacity: 1;
height: 229px;
top: 20px;
`
export const Price = styled.h5`
text-align: left;
font: Bold 22px/37px Avenir Next;
letter-spacing: 0px;
opacity: 1;
margin-top: 10px;
`