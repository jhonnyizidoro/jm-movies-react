import styled from 'styled-components'

import { onDesktop } from '../../assets/styles/media-queries'

export const ContainerElement = styled.div`
	width: calc(100vw - 30px);
	margin: 0 auto;
	${onDesktop`
		max-width: 1350px;
	`}	
`