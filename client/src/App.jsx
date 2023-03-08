import './App.scss'

import React from 'react'
import AppRouter from './AppRouter/AppRouter'
import Header from './Components/header/header'
import SignIn from './Pages/SignIn/SignIn'

function App() {
  return (
    <div>
      <Header/>
      <AppRouter />
    </div>
  )
}

export default App