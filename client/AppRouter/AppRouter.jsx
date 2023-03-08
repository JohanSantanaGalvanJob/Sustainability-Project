import React from 'react'
import Routes, { Route } from "react-router-dom"
import App from '../src/App'
function AppRouter() {
  return (
 <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/' element={<App />}></Route>
    <Route path='/' element={<App />}></Route>
    <Route path='/' element={<App />}></Route>
    <Route path='/' element={<App />}></Route>
 </Routes>
  )
}

export default AppRouter