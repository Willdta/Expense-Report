import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'

const Header = ({ logoutUser }) => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/add-expense">Add Expense</NavLink>
    <button onClick={logoutUser}>Logout</button>
  </header>
)

export default connect(null, { logoutUser })(Header)