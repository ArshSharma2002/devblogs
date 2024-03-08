import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='signup' element={<Signup />}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
