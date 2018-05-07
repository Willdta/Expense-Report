import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpenseFromFirebase, removeExpenseFromFirebase } from '../actions/expenseActions' 

const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense} 
        onSubmit={expense => {
          props.dispatch(editExpenseFromFirebase(props.expense.id, expense))
          props.history.push('/')
        }}  
      />
      <button 
        onClick={() => {
          props.dispatch(removeExpenseFromFirebase({ id: props.expense.id }))
          props.history.push('/')
        }}>
        Remove
      </button>      
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return { 
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpense)