import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
        <p>Don't have an account?<Link to='./pages/Create/createAccount'>Createaccount</Link></p>
    </div>
  )
}

export default Signin;