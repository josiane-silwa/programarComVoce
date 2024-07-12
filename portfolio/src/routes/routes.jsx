import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/index'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element= { <Home /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
