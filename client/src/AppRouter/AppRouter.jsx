import './AppRouter.scss'

import React from 'react'

import { Route,Routes } from "react-router-dom"
import Leaderboard from '../Pages/Leaderboard/Leaderboard'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Newsfeed from '../Pages/Newsfeed/Newsfeed'
import Categories from '../Pages/Categories/Categories'
import Profile from '../Pages/Profile/Profile'
import ItemPage from '../Pages/ItemPage/ItemPage'
import NotFound from '../Pages/NotFound/NotFound'

function AppRouter({isHamburgerOpen}) {
  return (
  <div className='pages-container'>
    <Routes>
          <Route path='/' element={<Newsfeed />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
          <Route path='/Newsfeed' element={<Newsfeed />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<Newsfeed />}></Route>
          <Route path='/itempage' element={<ItemPage isHamburgerOpen={isHamburgerOpen} />}></Route>
    </Routes>
 </div>
  )
}

export default AppRouter