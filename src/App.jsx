import { useState } from 'react'
import './App.css'
import Dashboard from './Navigations/Dashboard'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Router from './Navigations/Router'
import Navbar from './components/Navbar'
import AutoSwiper from './components/Swiper'

function App() {

  const dash_board = true;

  return (
  <>
  <BrowserRouter>
    {
      dash_board ?
      (
      <>
      <Header/>
      <Navbar/>
      <AutoSwiper/>
      <Router/>
      </>
      ):<Dashboard/>
    }
  </BrowserRouter>
  </>
  )
}

export default App
