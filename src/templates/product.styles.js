import styled from 'styled-components';

export const Container = styled.section`
    padding: 10vh 40px;
`
export const Grid = styled.section`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
		grid-template-columns: 50% 50%;
		
		@media only screen and (max-width: 800px) {
			grid-template-columns: 1fr;
		}

`
export const ImageContainer = styled.div`
max-width: 500px;
max-height: 500px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const Content = styled.div`
text-align: left;
color: #2C2C2C;
width: 476px;
`
export const Name = styled.h3`
font: Bold 30px/58px Avenir Next;
letter-spacing: 0px;
opacity: 1;
height: 41px;
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
export const ProductQuantity = styled.div`
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
`;

export const Plus = styled.div`
font-size: 20px;
font-weight: bold;
opacity: 0.8;
padding: 0 10px;
justify-self: flex-start;
`;