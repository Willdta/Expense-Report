import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = ({ expenses, dispatch }) => (
  <div>
    {expenses.map(expense => (
      <ExpenseListItem 
        key={expense.id} 
        {...expense}
      />
    ))}
  </div>
)

const mapStateToProps = (state) => {
  return { 
    expenses: getVisibleExpenses(state.expenses, state.filters) 
  }
}

export default connect(mapStateToProps)(ExpenseList)
