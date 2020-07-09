import React from "react"
import logoIcon from '../../images/logo.png';
import searchImg from '../../images/icon-search.png';
import cartImg from '../../images/icon-cart.png';
import {
	Container,
	HeaderWrapper,
	Logo,
	LogoImg,
	Menu,
	SearchIcon,
	SearchImg,
	CartIcon,
	CartImg
} from './header.styles';

const Header = ({ siteTitle }) => (
	<Container>
		<HeaderWrapper>
			<Logo>
				<LogoImg src={logoIcon} />
			</Logo>
			<Menu>
				<SearchIcon>
					<SearchImg src={searchImg} />
				</SearchIcon>
				<CartIcon>
					<CartImg src={cartImg} />
				</CartIcon>
			</Menu>
		</HeaderWrapper>
	</Container>
)

export default Header


