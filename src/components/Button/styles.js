import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { NavLink } from 'react-router-dom'

import { Colors } from '../../assets/styles/variables'
import { onDesktop } from '../../assets/styles/media-queries'

const getButtonStylesBySize = ({ isLarge }) => {
	if (isLarge) {
		return css`
			margin-top: 15px;
			padding: 16px;
			width: 100%;
		`
	}
	return css`
		padding: 10px 35px;
	`
}

const buttonStyles = css`
	${getButtonStylesBySize};
	background: linear-gradient(to right, ${Colors.LIGHT_BLUE}, ${Colors.BLUE});
	border: 0;
	border-radius: 99px;
	box-shadow: 0 2px 6px ${rgba(Colors.LIGHT_BLUE, .5)};
	color: ${Colors.WHITE};
	cursor: pointer;
	display: inline-block;
	font-weight: 600;
	outline: none;
	word-break: break-word;
	${onDesktop`
		transition: 300ms;
		&:hover {
			transform: scale(1.03);
		}
	`}
`

export const RegularButton = styled.button`${buttonStyles}`
export const ButtonAsLink = styled(NavLink)`${buttonStyles}`