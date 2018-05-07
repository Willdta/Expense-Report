import { combineReducers } from 'redux'
import expenseReducer from './expenseReducer'
import filterReducer from './filterReducer'
import authReducer from './authReducer'

export default combineReducers({
  expenses: expenseReducer,
  filters: filterReducer,
  auth: authReducer
})