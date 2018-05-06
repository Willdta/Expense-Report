import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './reducers/index'

import { addExpense } from './actions/expenseActions'

// const store = configureStore()

store.dispatch(addExpense({ description: 'fruit bill', amount: 400, createdAt: 500 }))
store.dispatch(addExpense({ description: 'baseball bill', amount: 1000, createdAt: 100 }))
store.dispatch(addExpense({ description: 'gym bill', amount: 4000, createdAt: 1000 }))

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root'))
registerServiceWorker()