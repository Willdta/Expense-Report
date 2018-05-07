import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import { showExpensesFromFirebase } from '../actions/expenseActions'
import { firebase } from '../firebase/firebase'

class ExpenseList extends Component {
  componentDidMount = () => {
    console.log(this.props)
    
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Logged In')
        
        this.props.history.push('/dashboard')
        this.props.showExpensesFromFirebase()
      } else {
        console.log('Logged Out')
    
        this.props.history.push('/')        
      }
    })
  }
  
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