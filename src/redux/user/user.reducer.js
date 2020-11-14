import UserActionTypes from './user.types'

const INITIAL_STATE = {
	currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.LOGIN_WITH_USERNAME:
			return {
				...state,
				currentUser: action.payload,
			}
		case UserActionTypes.LOGOUT:
			return {
				...state,
				currentUser: null,
			}
		default:
			return state
	}
}

export default userReducer