import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Offers from '../Pages/Offers'
import About from '../Pages/About'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default Router