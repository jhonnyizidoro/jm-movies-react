import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyDgn-cuJmm1CNimU6tfFuFtGyex3VEnjOo',
	authDomain: 'teste-front-b06ef.firebaseapp.com',
	databaseURL: 'https://teste-front-b06ef.firebaseio.com',
	projectId: 'teste-front-b06ef',
	storageBucket: 'teste-front-b06ef.appspot.com',
	messagingSenderId: '853255972875',
	appId: '1:853255972875:web:87bed8b1f674aaac7aff0e',
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
