import MovieActionTypes from './movie.types'

export const updateFavorites = favorites => ({
	type: MovieActionTypes.UPDATE_FAVORITES,
	payload: favorites,
})