import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'

export const FormInputFieldset = styled.fieldset`
	position: relative;
`

export const FormInputIcon = styled.div`
	left: 25px;
	position: absolute;
	top: 18px;
	svg {
		width: 25px;
	}
	path {
		fill: ${Colors.GRAY};
	}
`

export const FormInputElement = styled.input`
	border: 1px solid ${Colors.LIGHT_GRAY};
	border-radius: 99px;
	outline: none;
	padding: 20px 20px 20px 70px;
	width: 100%;
`