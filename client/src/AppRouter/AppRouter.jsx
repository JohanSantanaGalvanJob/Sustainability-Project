import './AppRouter.scss'

import React from 'react'
import  { Routes ,Route } from "react-router-dom"


import Leaderboard from '../Pages/Leaderboard/Leaderboard'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Social from '../Pages/Social/Social'
import Categories from '../Pages/Categories/Categories'
import Profile from '../Pages/Profile/Profile'

function AppRouter() {
  return (
  <div className='pages-container'>
    <Routes>
          <Route path='/' element={<Social />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
          <Route path='/social' element={<Social />}></Route>
          <Route path='/Categories' element={<Social />}></Route>
          <Route path='/Profile' element={<Social />}></Route>
    </Routes>
 </div>
  )
}

export default AppRouter