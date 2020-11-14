import React from 'react'

import { ButtonAsLink, RegularButton } from './styles'

const Button = ({ isLink, children, ...otherProps }) => (
	isLink ?
		<ButtonAsLink {...otherProps}>
			{children}
		</ButtonAsLink>
		:
		<RegularButton {...otherProps}>
			{children}
		</RegularButton>
)

export default Button