import styled from 'styled-components'

import { onDesktop } from '../../assets/styles/media-queries'

export const GridItems = styled.section`
	${onDesktop`
		display: flex;
		flex-wrap: wrap;
	`}
`

export const GridTitle = styled.h2`
	font-size: 1.3rem;
	font-weight: 600;
	margin: 70px 0 20px;
	${onDesktop`
		padding-left: 15px;
	`}
`