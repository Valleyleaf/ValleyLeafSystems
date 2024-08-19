import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home/>,
    },
  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);

//Reminder that index is /Home.
