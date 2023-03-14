import React from 'react'

import './Leaderboard.scss'

import firstPlace from '../../images/1stplace.svg'
import secondPlace from '../../images/2ndplace.svg'
import thirdPlace from '../../images/3rdplace.svg'
import userImageTest from '../../images/userImageTest.jpg'

function Leaderboard() {
  return (
    <section className='leaderboard-container'>
      <h1>Leaderboard</h1>
      <div className='first-place-container'>
        <img className='first-place-medal' src={firstPlace}/>
        <img className='first-place-image' src={userImageTest }/>
        <div className='points-container'>
          <p className='username'>@username</p>
          <p className='points'>2134 pts</p>
        </div>
      </div>
      <div className='second-third-place-container'>
        <div className='second-place-container'>
          <img className='second-place-medal' src={secondPlace}/>
          <img className='second-place-image' src={userImageTest}/>
          <div className='points-container'>
            <p className='username'>@username</p>
            <p className='points'>1020 pts</p>
          </div>
        </div>
        <div className='second-place-container'>
          <img className='second-place-medal' src={thirdPlace}/>
          <img className='second-place-image' src={userImageTest}/>
          <div className='points-container'>
            <p className='username'>@username</p>
            <p className='points'>918 pts</p>
          </div>
        </div>
      </div>
      <div className='remaining-container'> 
        <div>
          <p>4th</p>
          <img src={userImageTest}/>
          <p>@username</p>
          <p>625 pts</p>
        </div>
      </div>
    </section>
  )
}

export default Leaderboard