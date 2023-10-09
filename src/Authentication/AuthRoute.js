import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import LogIn from './LogIn'
import Home from '../page/Home'

function AuthRoute() {
  return (
    <Routes>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/login'  element={<LogIn/>}/>
        <Route path='/home'  element={<Home/>}/>
    </Routes>
  )
}

export default AuthRoute