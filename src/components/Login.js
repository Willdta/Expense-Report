import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions'

const Login = ({ loginUser }) => (
  <div>
    <button onClick={loginUser}>Login</button>
  </div>
)

export default connect(null, { loginUser })(Login)