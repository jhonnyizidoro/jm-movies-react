import React from 'react'

import {
	FormInputFieldset,
	FormInputElement,
	FormInputIcon,
} from './syles'

const FormInput = ({ icon: Icon, placeholder, ...otherProps }) => (
	<FormInputFieldset>
		<FormInputIcon>
			<Icon />
		</FormInputIcon>
		<FormInputElement
			placeholder={placeholder}
			aria-label={placeholder}
			{...otherProps}
		/>
	</FormInputFieldset>
)

export default FormInput