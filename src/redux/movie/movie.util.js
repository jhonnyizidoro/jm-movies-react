export const movieIsOnFavoriteMovies = (favorites, id) => favorites.find(({ id: favoriteId }) => favoriteId === id)

export const toggleMovieFromFavorites = (favorites, movie) => {

	const { id } = movie

	if (movieIsOnFavoriteMovies(favorites, id)) {
		return favorites.filter(({ id: favoriteId }) => favoriteId !== id)
	} else {
		return [
			...favorites,
			movie,
		]
	}
}