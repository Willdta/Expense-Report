import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import { showExpensesFromFirebase } from '../actions/expenseActions'

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props
   
    return (
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
}

const mapStateToProps = ({ expenses, filters }) => {
  return { 
    expenses: getVisibleExpenses(expenses, filters) 
  }
}

export default connect(mapStateToProps, { showExpensesFromFirebase })(ExpenseList)