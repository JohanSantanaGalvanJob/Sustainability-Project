import React from 'react'

import './SignUp.scss'

function SignUp() {
  return (
    <section className='sign-up-container'>
    <h1>Sign up!</h1>
    <h2>Please enter your details.</h2>
    <form>
      <label htmlFor='username'>Username</label>
      <input name='username' placeholder='Pleace enter your username'></input>
      <label htmlFor='email'>Email</label>
      <input name='email' placeholder='Please enter your email'></input>
      <label htmlFor='password'>Password</label>
      <input name='password' placeholder='Please enter your password'></input>
      <button className='submit-btn'>Create account</button>
    </form>
  </section>
  )
}

export default SignUp