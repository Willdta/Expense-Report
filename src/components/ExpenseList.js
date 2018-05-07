import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import { showExpensesFromFirebase } from '../actions/expenseActions'

class ExpenseList extends Component {
  state = {
    loading: false
  }

  componentDidMount = () => {
    this.props.showExpensesFromFirebase()
    this.setState({ loading: true })
  }
  
  render() {
    const { expenses } = this.props

    const checkExpense = () => {
      if (this.state.loading === true) {
        setTimeout(() => {
          this.setState({loading: false})
        }, 200)
        return <h1 style={{ 'color': 'white', 'textAlign': 'center' }}>Loading..</h1>        
      } else if (expenses.length === 0) {
        return <h1 style={{ 'color': 'white', 'textAlign': 'center' }}>No Expenses</h1>
       } else if (expenses) {
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

    return checkExpense()
  }
}

const mapStateToProps = ({ expenses, filters }) => {
  return { 
    expenses: getVisibleExpenses(expenses, filters) 
  }
}

export default connect(mapStateToProps, { showExpensesFromFirebase })(ExpenseList)