import React, { useState } from 'react'
import { connect } from 'react-redux'

import { loginWithUsername } from '../../redux/user/user.actions'
import { auth, googleProvider } from '../../util/firebase'

import FormInput from '../../components/FormInput'
import Button from '../../components/Button'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg'

import {
	LoginTitle,
	LoginFormElement,
	LoginSubtitleWrapper,
	LoginSubtitle,
	LoginWithGoogle,
	LoginWithGoogleIcon,
} from './styles'

const LoginPage = ({ loginWithUsername }) => {
	const [username, setUsername] = useState(null)

	const handleSubmit = event => {
		event.preventDefault()
		if (username) {
			loginWithUsername(username)
		}
	}

	const loginWithGoogle = () => {
		auth.signInWithPopup(googleProvider)
			.then(({ user: { displayName } }) => {
				loginWithUsername(displayName)
			})
	}

	return (
		<>
			<LoginTitle>Acesse sua conta</LoginTitle>
			<LoginFormElement onSubmit={handleSubmit}>
				<FormInput
					placeholder="Seu nome"
					icon={UserIcon}
					type="text"
					onChange={({ target: { value } }) => setUsername(value)}
				/>
				<Button isLarge type="submit">Acessar minha conta</Button>
				<LoginSubtitleWrapper>
					<LoginSubtitle>OU SE PREFERIR</LoginSubtitle>
				</LoginSubtitleWrapper>
				<LoginWithGoogle
					type="button"
					aria-label="Logue com sua conta do Google"
					onClick={loginWithGoogle}
				>
					Acessar com o Google
					<LoginWithGoogleIcon>
						<GoogleIcon />
					</LoginWithGoogleIcon>
				</LoginWithGoogle>
			</LoginFormElement>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	loginWithUsername: username => dispatch(loginWithUsername(username)),
})

export default connect(null, mapDispatchToProps)(LoginPage)