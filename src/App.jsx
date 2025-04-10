import { useState } from 'react'
import './App.css'
import Dashboard from './Navigations/Dashboard'
import { BrowserRouter } from 'react-router-dom'
import Router from './Navigations/Router'
import Navbar from './components/Navbar'

function App() {
  const dash_board = true;

  return (
    <>
      <BrowserRouter>
        {
          dash_board ? 
          (
            <>
              <Router />
            </>
          )
          : <Dashboard />
        }
      </BrowserRouter>
    </>
  )
}

export default App
