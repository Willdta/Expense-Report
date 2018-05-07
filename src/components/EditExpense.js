import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpenseFromFirebase, removeExpenseFromFirebase } from '../actions/expenseActions' 

const EditExpense = ({ editExpenseFromFirebase, removeExpenseFromFirebase, ...props }) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense} 
        onSubmit={expense => {
          editExpenseFromFirebase(props.expense.id, expense)
          props.history.push('/dashboard')
        }}  
      />
      <button 
        onClick={() => {
          removeExpenseFromFirebase({ id: props.expense.id })
         props.history.push('/dashboard')
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

export default connect(mapStateToProps, { editExpenseFromFirebase, removeExpenseFromFirebase })(EditExpense)