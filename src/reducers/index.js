import { createStore, combineReducers } from 'redux'
import expenseReducer from './expenseReducer'
import filterReducer from './filterReducer'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  )

  return store
} 