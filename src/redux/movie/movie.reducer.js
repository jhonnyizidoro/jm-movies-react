import MovieActionTypes from './movie.types'

const INITIAL_STATE = {
	favorites: [],
}

const movieReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MovieActionTypes.UPDATE_FAVORITES:
			return {
				...state,
				favorites: action.payload,
			}
		default:
			return state
	}
}

export default movieReducer