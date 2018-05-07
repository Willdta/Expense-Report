import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import { firebase } from './firebase/firebase'
import { checkLogin, checkLogout } from './actions/authActions'
import Spinner from './components/Spinner'

let hasRendered = false

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root'))
  
   hasRendered = true
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(checkLogin(user.uid))
    history.push('/dashboard')
    if (!hasRendered) {
      renderApp()
    }
  } else {
    store.dispatch(checkLogout())
    history.push('/')
    renderApp()
  }
})

ReactDOM.render(
  <Provider store={store}>
   <Spinner />
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()