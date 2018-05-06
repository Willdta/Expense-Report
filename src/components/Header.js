import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/add-expense">Add Expense</NavLink>
  </header>
)

export default Header