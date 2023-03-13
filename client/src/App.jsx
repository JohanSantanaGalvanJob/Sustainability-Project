import './App.scss'

import React from 'react'
import AppRouter from './AppRouter/AppRouter'
import Header from './components/header/header'

import { useState } from 'react'

function App() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  return (
    <div>
      <Header
      isHamburgerOpen = {isHamburgerOpen}
      setIsHamburgerOpen = {setIsHamburgerOpen}
      />
      <AppRouter 
      isHamburgerOpen = {isHamburgerOpen}
      />
  
    </div>
  )
}

export default App