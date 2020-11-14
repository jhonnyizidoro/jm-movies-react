import React from 'react'

import { GridTitle, GridItems } from './styles'

const Grid = ({ title, children }) => (
	<>
		<GridTitle>{title}</GridTitle>
		<GridItems>
			{children}
		</GridItems>
	</>
)

export default Grid