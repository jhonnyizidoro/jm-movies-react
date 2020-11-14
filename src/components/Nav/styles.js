import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { NavLink as RouterLink } from 'react-router-dom'

import { Colors } from '../../assets/styles/variables'
import { onDesktop, onMobile } from '../../assets/styles/media-queries'

const getNavLinksTransform = ({ isOpen }) => {
	if (!isOpen) {
		return css`transform: translateX(-130%)`
	}
}

export const NavElement = styled.nav`
	background: ${Colors.WHITE};
	box-shadow: 0 0 25px ${rgba(Colors.DARK, .1)};
	padding: 10px 0;
`

export const NavWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`

export const NavLogoLink = styled(RouterLink)``

export const NavLogo = styled.img`
	width: 150px;
`

export const NavLinks = styled.div`
	${onMobile`
		${getNavLinksTransform};
		background: ${Colors.WHITE};
		box-shadow: 0 0 25px ${rgba(Colors.DARK, .1)};
		height: 100%;
		left: 0;
		max-width: calc(100vw - 80px);
		padding: 20px 50px;
		position: fixed;
		top: 0;
		transition: 350ms;
		z-index: 1;
	`}
`

export const NavLink = styled(RouterLink)`
	padding: 10px;
	${onDesktop`
		border-bottom: 2px solid transparent;
		margin-right: 20px;
		transition: 350ms;
		&:hover,
		&.active {
			border-bottom: 2px solid ${Colors.BLUE};
		}
	`}
	${onMobile`
		display: block;
		margin-bottom: 50px;
	`}
`

export const NavHamburgerWrapper = styled.div`
	${onDesktop`
		display: none;
	`}
`