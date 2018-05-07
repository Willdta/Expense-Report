import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'

// let hasRendered = false

// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(
//       <Provider store={store}>
//         <AppRouter />
//       </Provider>,
//       document.getElementById('root'))
//     registerServiceWorker()
//     hasRendered = true
//   }
// }

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     if (history.location.pathname === '/') {
//       history.push('/dashboard')
//     }
//   } else {
//     console.log('logged out')
//     history.push('/')
//   }
// })

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()