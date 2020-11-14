import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import movieReducer from './movie/movie.reducer'
import userReducer from './user/user.reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'movie',
		'user',
	],
}

const rootReducer = combineReducers({
	movie: movieReducer,
	user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)