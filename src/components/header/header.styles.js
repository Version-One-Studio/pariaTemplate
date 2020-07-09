import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`;

export const Title = styled.h1``;

export const HeaderWrapper = styled.div`
display: grid;
grid-template-columns: 20% 1fr;
height: 100%;
justify-items: center;
align-items: center;
`;

export const Logo = styled.div`
height: 50px;
width: 50px;
`;

export const LogoImg = styled.img`
height: 100%;
object-fit: cover;
`;

export const Menu = styled.div`
justify-self: end;
display: flex;
justify-content: center;
align-items: center;
padding-right: 50px;
padding-left: 50px;

`;

export const SearchIcon = styled.div`
padding: 0 10px;
height: 50px;
width: 50px;
display: flex;
align-items: center;
`;

export const CartIcon = styled.div`
padding: 0 10px;
height: 50px;
width: 50px;
display: flex;
align-items: center;
`;

export const SearchImg = styled.img`
max-width: 100%;
`;

export const CartImg = styled.img`
max-width: 100%;
`;
