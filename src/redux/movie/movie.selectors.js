import { createSelector } from 'reselect'

const selectMovie = state => state.movie

export const selectFavoriteMovies = createSelector(selectMovie, movie => movie.favorites)