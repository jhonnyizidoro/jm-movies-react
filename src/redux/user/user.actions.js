import UserActionTypes from './user.types'

export const loginWithUsername = username => ({
	type: UserActionTypes.LOGIN_WITH_USERNAME,
	payload: username,
})

export const logout = () => ({
	type: UserActionTypes.LOGOUT,
})