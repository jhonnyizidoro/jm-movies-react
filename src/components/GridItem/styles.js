import styled from 'styled-components'
import { rgba } from 'polished'
import { NavLink } from 'react-router-dom'

import { Colors } from '../../assets/styles/variables'
import { onDesktop, onMobile } from '../../assets/styles/media-queries'

export const GridItemWrapper = styled.div`
	${onDesktop`
		padding: 15px;
		width: 33.33%;
	`}
	${onMobile`
		padding: 10px 0
	`}
`

export const GridItemElement = styled(NavLink)`
	background: ${Colors.WHITE};
	box-shadow: 0 0 25px ${rgba(Colors.DARK, .1)};
	border-radius: 10px;
	display: flex;
	overflow: hidden;
	position: relative;
`

export const GridItemImage = styled.img`
	${onDesktop`
		width: 30%;
	`}
	${onMobile`
		width: 35%;
	`}
`

export const GridItemInformation = styled.div`
	padding: 15px;
	${onMobile`
		width: 65%;
	`}
`

export const GridItemTitle = styled.h3`
	font-size: 1.1rem;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 220px;
`

export const GridItemSubtitle = styled.div`
	margin: 7px 0 15px;
`

export const GridItemDescription = styled.p`
	color: ${Colors.DARK_GRAY};
	line-height: 24px;
	text-align: justify;
	height: calc(24px * 4);
	overflow: hidden;
	
	//Ellipsis overflow em browsers webkit
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`

export const GridItemIcon = styled.div`
	cursor: pointer;
	padding: 15px;
	position: absolute;
	right: 0;
	top: 0;
	svg {
		width: 20px;
	}
	path {
		fill: ${Colors.YELLOW};
	}
`