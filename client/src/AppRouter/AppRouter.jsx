import React from 'react'
import { Route,Routes } from "react-router-dom"
import App from '../App'
import Leaderboard from '../Pages/Leaderboard/Leaderboard'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Social from '../Pages/Social/Social'
function AppRouter() {
  return (
 <Routes>
    <Route path='/' element={<Social />}></Route>
    <Route path='/signUp' element={<SignUp />}></Route>
    <Route path='/signIn' element={<SignIn />}></Route>
    <Route path='/leaderboard' element={<Leaderboard />}></Route>
    <Route path='/social' element={<Social />}></Route>
 </Routes>
  )
}

export default AppRouter