import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions'
import '../styles/login.css'

const Login = ({ loginUser }) => (
  <div className="layout">
    <div className="box-layout" >
      <h1>Expense Report</h1>
      <p>Manage your expenses</p>
      <button className="button" onClick={() => loginUser()}>Login</button>
    </div>
  </div>
)

export default connect(null, { loginUser })(Login)