import styled from 'styled-components'
import { rgba } from 'polished'

import { Colors } from '../../assets/styles/variables'

export const LoginTitle = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	margin: 70px 0 30px;
	text-align: center;
`

export const LoginFormElement = styled.form`
	margin: 0 auto;
	max-width: 450px;
`

export const LoginSubtitleWrapper = styled.div`
	background: ${Colors.LIGHT_GRAY};
	height: 1px;
	margin: 35px 0;
	position: relative;
`

export const LoginSubtitle = styled.div`
	background: ${Colors.BACKGROUND};
	color: ${Colors.DARK_GRAY};
	font-size: .9rem;
	padding: 0 15px;
	position: absolute;
	right: 50%;
	top: 50%;
	transform: translate(50%, -50%);
`

export const LoginWithGoogle = styled.button`
	background: transparent;
	border: 1px solid ${Colors.GRAY};
	border-radius: 99px;
	color: ${Colors.DARK_GRAY};
	cursor: pointer;
	outline: none;
	padding: 16px;
	position: relative;
	transition: 300ms;
	width: 100%;
	&:hover {
		transform: scale(1.03);
	}
`

export const LoginWithGoogleIcon = styled.span`
	left: 5px;
	position: absolute;
	top: 5px;
	svg {
		height: 40px;
	}
`