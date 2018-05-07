import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'
import '../styles/dashboard.css'

const Dashboard = () => (
  <div>
    <div className="expense-summary">
      <ExpenseSummary />
    </div>
    <div className="expense-filter-wrapper">
      <ExpenseListFilters />
    </div>
    <div className="expense-list-wrapper">
      <ExpenseList />
    </div>
  </div>
)

export default Dashboard