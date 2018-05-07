import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import '../styles/dashboard.css'

const Dashboard = () => (
  <div>
    <div className="expense-filter-wrapper">
      <ExpenseListFilters />
    </div>
    <div className="expense-list-wrapper">
      <h1 style={{'textAlign': 'center'}}>Expenses </h1>
      <ExpenseList />
    </div>
  </div>
)

export default Dashboard