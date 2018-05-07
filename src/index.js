import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import { firebase } from './firebase/firebase'
import { checkLogin, checkLogout } from './actions/authActions'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(checkLogin(user.uid))
    history.push('/dashboard')
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('root'))
  } else {
    console.log('logged out')
    store.dispatch(checkLogout())
    history.push('/')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <h3>loading...</h3>
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()