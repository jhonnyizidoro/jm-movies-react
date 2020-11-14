import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectFavoriteMovies } from '../../redux/movie/movie.selectors'

import Grid from '../../components/Grid'
import GridItem from '../../components/GridItem'

const FavoritesPage = ({ favorites }) => (
	<Grid title={favorites.length ? 'Filmes favoritados' : 'Nenhum favorito adicionado'}>
		{
			favorites.map(({ id, title, poster, year, plot }) => (
				<GridItem
					title={title}
					poster={poster}
					year={year}
					plot={plot}
					key={id}
					id={id}
				/>
			))
		}
	</Grid>
)

const mapStateToProps = createStructuredSelector({
	favorites: selectFavoriteMovies,
})


export default connect(mapStateToProps)(FavoritesPage)