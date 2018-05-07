import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'
import '../styles/header.css'

const Header = ({ logoutUser }) => (
  <header className="header">
    <NavLink className="nav-item" to="/dashboard">Dashboard</NavLink>
    <NavLink className="nav-item" to="/add-expense">Add Expense</NavLink>
    <button className="nav-item" onClick={() => logoutUser()}>Logout</button>
  </header>
)

export default connect(null, { logoutUser })(Header)