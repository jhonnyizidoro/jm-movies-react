import styled from 'styled-components'
import { rgba } from 'polished'
import { NavLink } from 'react-router-dom'

import { Colors } from '../../assets/styles/variables'
import { onDesktop, onMobile } from '../../assets/styles/media-queries'

export const MovieContainer = styled.main`
	margin: 70px auto 0;
	max-width: 1000px;
`

export const MovieReturnLink = styled(NavLink)`
	align-items: center;
	display: flex;
	margin-bottom: 15px;
`

export const MovieReturnIcon = styled.div`
	background: ${Colors.WHITE};
	border-radius: 50%;
	box-shadow: 0 0 15px ${rgba(Colors.DARK, .1)};
	margin-right: 20px;
	padding: 16px;
	svg {
		width: 23px;
	}
	path {
		fill: ${Colors.DARK_GRAY};
	}
`

export const MovieReturnText = styled.span`
	color: ${Colors.DARK_GRAY};
`

export const MovieWrapper = styled.div`
	${onDesktop`
		display: flex;
	`}
`

export const MovieImageWrapper = styled.div`
	box-shadow: 0 0 28px ${rgba(Colors.DARK, .2)};
	border-radius: 7px;
	min-width: 380px;
	overflow: hidden;
	padding: 30px;
	position: relative;
`

export const MovieImageWithBlur = styled.img`
	filter: blur(5px);
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`

export const MovieImage = styled.img`
	box-shadow: 0 0 14px ${rgba(Colors.DARK, .5)};
	border-radius: 7px;
	position: relative;
	width: 100%;
`

export const MovieInformationWrapper = styled.div`
	flex-grow: 1;
	&:not(:nth-child(1)) {
		${onDesktop`
			margin-left: 40px;
		`}
		${onMobile`
			margin-top: 40px;
		`}
	}
`

export const MovieTitleWrapper = styled.div`
	margin-bottom: 35px;
`

export const MovieTitle = styled.h1`
	display: inline-block;
	font-size: 2.6rem;
	font-weight: 700;
	padding-bottom: 10px;
	position: relative;
	&::after {
		background: linear-gradient(to right, ${Colors.LIGHT_BLUE}, ${Colors.BLUE});
		border-radius: 99px;
		bottom: 0;
		content: '';
		display: block;
		height: 6px;
		left: 0;
		position: absolute;
		width: 100px;
	}
`

export const MovieSubtitle = styled.h2`
	font-size: 1.8rem;
	line-height: 1.4;
`

export const MovieDescription = styled.p`
	color: ${Colors.DARK_GRAY};
	font-size: 1.1rem;
	line-height: 1.8;
	margin: 35px 0;
`

export const MovieFavorite = styled.div`
	align-items: center;
	border-bottom: 1px solid ${Colors.LIGHT_GRAY};
	color: ${Colors.DARK_GRAY};
	cursor: pointer;
	display: flex;
	margin-bottom: 35px;
	padding-bottom: 35px;
`

export const MovieFavoriteIcon = styled.div`
	margin-right: 10px;
	svg {
		width: 20px;
	}
	path {
		fill: ${Colors.YELLOW};
	}
`

export const MovieRatings = styled.div`
align-items: center;
	background: ${Colors.WHITE};
	border-radius: 10px;
	box-shadow: 0 0 25px ${rgba(Colors.DARK, .1)};
	display: flex;
	padding: 10px 0 10px 15px;
	position: relative;
	&::after {
		background: ${Colors.BLUE};
		border-radius: 99px;
		bottom: 10%;
		content: '';
		display: block;
		height: 80%;
		left: 5px;
		position: absolute;
		width: 7px;
	}
`

export const MovieRating = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	&:not(:last-child) {
		border-right: 1px solid ${Colors.LIGHT_GRAY};
	}
	${onDesktop`
		padding: 15px;
	`}
	${onMobile`
		padding: 15px 5px;
	`}
`

export const MovieRatingTitle = styled.div`
	font-weight: 600;
	margin-bottom: 8px;
	${onDesktop`
		font-size: 1.2rem;
	`}
`

export const MovieRatingValue = styled.div`
	color: ${Colors.DARK_GRAY};
`