import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <div className='Frame1'>
      <Navbar/>
        <div className='outletClass'>
          <Outlet/>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default App
