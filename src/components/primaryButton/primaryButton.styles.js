import styled from 'styled-components';

export const Container = styled.div`
margin-top: ${({marginTop}) => marginTop? marginTop : '0'};
margin-right: ${({marginRight}) => marginRight? marginRight : '0'};
margin-bottom: ${({marginBottom}) => marginBottom? marginBottom : '0'};
margin-left: ${({marginLeft}) => marginLeft? marginLeft : '0'};
display: inline-block;
`;

export const Button = styled.button`
width: ${({ width }) => width? width : '287px'};
height: 65px;
background: #000000 0% 0% no-repeat padding-box;
opacity: 1;
color: #fff;
border: none;
cursor: pointer;
font: 600 18px/22px Avenir Next;
box-shadow: 0 4px 40px rgba(0,0,0,0.25);
transition: transform 0.3s ease-in-out;

:disabled {
	background: #bbb;
	cursor: not-allowed;
}

:hover {
	transform: scale(1.04);
}
`;