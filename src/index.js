import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { firebase } from './firebase/firebase'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
    
  } else {
    console.log('logged out');
    
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()