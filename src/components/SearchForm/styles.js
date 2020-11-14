import styled from 'styled-components'

import { onMobile, onDesktop } from '../../assets/styles/media-queries'

export const SearchFormWrapper = styled.section`
	max-width: 500px;
	${onDesktop`
		margin: 70px auto;
	`}
	${onMobile`
		margin: 50px auto;
	`}
`

export const SearchFormTitle = styled.h1`
	font-weight: 600;
	line-height: 1.3;
	text-align: center;
	${onDesktop`
		font-size: 1.8rem;
		margin-bottom: 40px;
	`}
	${onMobile`
		font-size: 1.5rem;
		margin-bottom: 20px;
	`}
`

export const SearchFormElement = styled.form``