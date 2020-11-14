import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import Hamburger from 'hamburger-react'

import { selectFavoriteMovies } from '../../redux/movie/movie.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { logout } from '../../redux/user/user.actions'

import Container from '../Container'
import Button from '../Button'
import Logo from '../../assets/images/logo.svg'

import {
	NavElement,
	NavWrapper,
	NavLogoLink,
	NavLogo,
	NavLinks,
	NavLink,
	NavHamburgerWrapper,
} from './styles'

const Nav = ({ currentUser, logout, favorites }) => {
	const [isOpen, setOpen] = useState(false)

	return (
		<NavElement>
			<Container>
				<NavWrapper>
					<NavLogoLink to="/">
						<NavLogo src={Logo} alt="Logo JM. MOVIES" />
					</NavLogoLink>
					<NavLinks isOpen={isOpen} onClick={() => setOpen(false)}>
						<NavLink
							exact
							to="/"
							activeClassName="active"
						>
							Início
						</NavLink>
						<NavLink
							exact
							to="/favorites"
							activeClassName="active"
						>
							Meus favoritos ({favorites.length})
						</NavLink>
						{
							currentUser ?
								<Button
									type="button"
									aria-label="Clique para sair"
									onClick={logout}
								>
									{currentUser}, sair
								</Button>
								:
								<Button
									isLink
									exact
									to="/login">
									Login
								</Button>
						}
					</NavLinks>
					<NavHamburgerWrapper>
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</NavHamburgerWrapper>
				</NavWrapper>
			</Container>
		</NavElement>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	favorites: selectFavoriteMovies,
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)