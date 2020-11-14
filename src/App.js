import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selectors'

import Nav from './components/Nav'
import Container from './components/Container'
import HomePage from './pages/Home'
import MoviePage from './pages/Movie'
import FavoritesPage from './pages/Favorites'
import LoginPage from './pages/Login'

const App = ({ currentUser }) => (
	<>
		<Nav />
		<Container>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/movie/:title" component={MoviePage} />
				<Route exact path="/favorites" component={FavoritesPage} />
				<Route exact path="/login" render={() => (
					currentUser ?
						<Redirect to="/" />
						:
						<LoginPage />
				)} />
			</Switch>
		</Container>
	</>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App)