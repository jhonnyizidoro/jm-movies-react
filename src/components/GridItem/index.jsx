import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { updateFavorites } from '../../redux/movie/movie.actions'
import { selectFavoriteMovies } from '../../redux/movie/movie.selectors'
import { toggleMovieFromFavorites, movieIsOnFavoriteMovies } from '../../redux/movie/movie.util'

import { ReactComponent as StarOutlinedIcon } from '../../assets/icons/star-outlined.svg'
import { ReactComponent as StarFilledIcon } from '../../assets/icons/star-filled.svg'

import {
	GridItemWrapper,
	GridItemElement,
	GridItemImage,
	GridItemInformation,
	GridItemTitle,
	GridItemSubtitle,
	GridItemDescription,
	GridItemIcon,
} from './styles'

const GridItem = ({ id, title, poster, year, plot, favorites, updateFavorites }) => {

	const handleFavorite = event => {
		event.preventDefault()
		updateFavorites(toggleMovieFromFavorites(favorites, {
			id,
			title,
			poster,
			year,
			plot,
		}))
	}

	return (
		<GridItemWrapper>
			<GridItemElement to={`/movie/${title}`}>
				<GridItemImage src={poster} alt={title} />
				<GridItemInformation>
					<GridItemTitle>{title}</GridItemTitle>
					<GridItemSubtitle>{year.replace(/–\s*$/, '')}</GridItemSubtitle>
					<GridItemDescription>{plot}</GridItemDescription>
					<GridItemIcon onClick={handleFavorite}>
						{
							movieIsOnFavoriteMovies(favorites, id) ?
								<StarFilledIcon />
								:
								<StarOutlinedIcon />
						}
					</GridItemIcon>
				</GridItemInformation>
			</GridItemElement>
		</GridItemWrapper>
	)
}

const mapStateToProps = createStructuredSelector({
	favorites: selectFavoriteMovies,
})

const mapDispatchToProps = dispatch => ({
	updateFavorites: favorites => dispatch(updateFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GridItem)