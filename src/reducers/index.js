import { combineReducers } from 'redux'
import expenseReducer from './expenseReducer'
import filterReducer from './filterReducer'

export default combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
})