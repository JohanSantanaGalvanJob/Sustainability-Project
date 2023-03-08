import React from 'react'
import Routes, { Route } from "react-router-dom"
import App from '../src/App'
import Leaderboard from '../src/Pages/Leaderboard/Leaderboard'
import SignIn from '../src/Pages/SignIn/SignIn'
import SignUp from '../src/Pages/SignUp/SignUp'
import Social from '../src/Pages/Social/Social'
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