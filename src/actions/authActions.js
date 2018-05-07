import { firebase, googleAuthProvider } from '../firebase/firebase'

export const loginUser = () => dispatch => {
  firebase.auth().signInWithPopup(googleAuthProvider)
}

export const logoutUser = () => dispatch => {
  firebase.auth().signOut()
}