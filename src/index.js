import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import { firebase } from './firebase/firebase'
import { showExpensesFromFirebase } from './actions/expenseActions'
import { checkLogin, checkLogout } from './actions/authActions'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(checkLogin(user.uid))
    store.dispatch(showExpensesFromFirebase())
     history.push('/dashboard')
  } else {
    console.log('logged out')
    store.dispatch(checkLogout())
    history.push('/')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()