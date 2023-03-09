import React from 'react'
import './SignIn.scss'


function SignIn() {
  return (
    <section className='sign-in-container'>
      <h1>Welcome!</h1>
      <h2>Please enter your details.</h2>
      <form>
        <label htmlFor='username'>Username</label>
        <input name='username' placeholder='Pleace enter your email'></input>
        <label htmlFor='password'>Password</label>
        <input name='password' placeholder='Please enter your password'></input>
        <button className='submit-btn'>Sign in!</button>
      </form>
      <h3>Don’t have a account yet?</h3>
      <a>
        <h4>Sign up here!</h4>
      </a>
    </section>
  )
}

export default SignIn