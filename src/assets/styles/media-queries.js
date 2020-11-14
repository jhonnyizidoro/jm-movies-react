import { css } from 'styled-components'

export const onMobile = (...args) => css`
	@media (max-width: 768px) {
		${css(...args)}
	}
`

export const onDesktop = (...args) => css`
	@media (min-width: 768px) {
		${css(...args)}
	}
`