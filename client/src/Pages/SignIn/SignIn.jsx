import React from 'react'
import './SignIn.scss'


function SignIn() {
  return (
    <section className='sign-in-container'>
      <h1>Sign Up!</h1>
      <h2>Please enter your details.</h2>
      <form>
        <label htmlFor='username'>Username</label>
        <input name='username' placeholder='Pleace enter your email'></input>
        <label htmlFor='password'>Password</label>
        <input name='password' placeholder='Please enter your password'></input>
        <button className='submit-btn'>Sign in!</button>
      </form>
    </section>
  )
}

export default SignIn