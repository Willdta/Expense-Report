import React from 'react'
import { connect } from 'react-redux'
import { addExpenseToFirebase } from '../actions/expenseActions'
import ExpenseForm from './ExpenseForm'

const AddExpense = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={expense => {
        props.addExpenseToFirebase(expense)
        props.history.push('/')
      }}
    />
  </div>
)

export default connect(null, { addExpenseToFirebase })(AddExpense)