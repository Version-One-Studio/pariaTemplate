import React from "react"
import CartSideBar from '../cartSidebar/cartSidebar.component';
import { useGlobalState, useGlobalDisptach } from '../../context/GlobalContextProvider';
import { TOGGLE_SIDEBAR_HIDDEN } from '../../context/actionTypes'
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
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {

	const state = useGlobalState();
	const dispatch = useGlobalDisptach();

	return(
		<Container>
			<HeaderWrapper>
				<Link to="/">
					<Logo>
						<LogoImg src={logoIcon} />
					</Logo>
				</Link>
				<Menu>
					<SearchIcon>
						<SearchImg src={searchImg} />
					</SearchIcon>
					<CartIcon onClick={() => dispatch({type: TOGGLE_SIDEBAR_HIDDEN})}>
						<CartImg src={cartImg} />
					</CartIcon>
				</Menu>
			</HeaderWrapper>
			{ state.sidebarHidden ? null : <CartSideBar cartItems={state.shoppingCart} dispatch={dispatch} /> }
		</Container>
	)
}

export default Header


