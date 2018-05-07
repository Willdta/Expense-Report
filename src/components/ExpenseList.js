import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import { showExpensesFromFirebase } from '../actions/expenseActions'

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props
   
    const checkExpense = () => {
      return expenses.length === 0 ? (
        <h1 style={{ 'color': 'white', 'textAlign': 'center' }}>No Expenses</h1>
      ) : (
        <div>
          {expenses.map(expense => (
            <ExpenseListItem
              key={expense.id}
              {...expense}
            />
          ))}
        </div>
      )
    }

    return checkExpense()
  }
}

const mapStateToProps = ({ expenses, filters }) => {
  return { 
    expenses: getVisibleExpenses(expenses, filters) 
  }
}

export default connect(mapStateToProps, { showExpensesFromFirebase })(ExpenseList)