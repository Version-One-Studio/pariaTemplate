import styled from 'styled-components';
import { largeScreen } from '../../theme/screenSizes';

export const Container = styled.div`
max-width: ${largeScreen};
width: 100%;
height: 458px;
background: #313739 0% 0% no-repeat padding-box;
opacity: 1;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const MailingList = styled.form``;

export const InputField = styled.input`
width: 447px;
height: 67px;
background: #FFFFFF0F 0% 0% no-repeat padding-box;
border: none;
text-align: left;
font: 500 18px/48px Avenir Next;
letter-spacing: 0px;
color: #B5B5B5;
padding-left: 20px;
`;

export const Button = styled.input`
width: 133px;
height: 67px;
background: #FFFFFF14 0% 0% no-repeat padding-box;
text-align: center;
font: 600 16px/48px Avenir Next;
letter-spacing: 0px;
color: #FFFFFF;
border: none;
outline: none;
cursor: pointer;
`;

export const Text = styled.p`
width: 466px;
height: 22px;
text-align: center;
font: Demi Bold 16px/48px Avenir Next;
letter-spacing: 0px;
color: #8B8B8B;
opacity: 1;
margin-top: 14px;
`;

export const Policies = styled.div`
margin-top: 40px;

@media only screen and (max-width: 800px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
`;

export const Policy = styled.a`
min-width: 99px;
min-height: 22px;
text-align: center;
text-decoration: underline;
font: 600 16px/48px Avenir Next;
letter-spacing: 0px;
color: #D3D3D3;
padding: 2px 10px;
cursor: pointer;
/* margin-left: 10px; */


:first-child{
	margin-left: 0;
}
`;

export const ImageContainer = styled.div`
margin-top: 50px;
width: 95px;
height: 25px;
opacity: 1;
`;

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const Caption = styled.p`
margin-top: 14px;
width: 218px;
height: 22px;
text-align: center;
font: Medium 16px/48px Avenir Next;
letter-spacing: 0px;
color: #B5B5B5;
opacity: 1
`;