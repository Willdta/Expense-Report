import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/expenseForm.css'

class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      focused: false,
      errors: ''
    }
  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAmount = e => {
    const amount = e.target.value
    const reg = /^\d{1,}(\.\d{0,2})?$/

    if (!amount || amount.match(reg)) {
      this.setState({ amount })
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt })
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState({ focused })
  }

  addExpense = e => {
    e.preventDefault()

    if (!this.state.description) {
      this.setState({ errors: 'Please enter a description' })
    } else if (!this.state.amount) {
      this.setState({ errors: 'Please enter an amount' })
    } else if (!this.state.description && !this.state.amount) {
      this.setState({ errors: 'Please enter a description and amount' })
    } else {
      this.setState({ errors: null })
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      })
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        {this.state.errors && <h1 style={{'textAlign': 'center'}} >{this.state.errors}</h1>}
        <form className="form" onSubmit={this.addExpense}>
          <input 
            className="form-input"
            type="text" 
            placeholder="description"
            value={this.state.description}
            name="description"
            onChange={this.onChange} 
          />
          <input 
            className="form-input"
            type="text" 
            placeholder="amount"
            value={this.state.amount}
            onChange={this.handleAmount}       
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            className="form-input"
            type="text" 
            placeholder="Additional expense info (optional)"
            value={this.state.note}
            name="note"
            onChange={this.onChange}    
          />
          <button className="form-button" type="submit">Submit Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm