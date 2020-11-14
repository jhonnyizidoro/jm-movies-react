import React from 'react'

import { ReactComponent as LoaderImage } from '../../assets/images/loader.svg'

import { LoaderWrapper } from './styles'

const Loader = () => (
	<LoaderWrapper>
		<LoaderImage />
	</LoaderWrapper>
)

export default Loader