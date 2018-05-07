import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const Dashboard = (props) => (
  <div>
    <ExpenseList history={props.history} />
    <ExpenseListFilters />
  </div>
)

export default Dashboard