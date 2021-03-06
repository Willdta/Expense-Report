import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dashboard.css'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expense-wrapper">
    <Link
        style={{'textDecoration': 'none', 'color': 'black'}} 
        to={`/edit/${id}`}>
      <h1>{description}</h1>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}   -   {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
)

export default ExpenseListItem