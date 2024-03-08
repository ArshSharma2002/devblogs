import React from 'react'
import navlogo from '../images/logos/logo-white-transparent.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="navbar bg-violet position-sticky top-0 z-1">
        <div class="container-fluid">
          {/* <a class="navbar-brand text-light">DevBlogs</a> */}
          <a class="navbar-brand text-light"><img id='navlogo' className='m-2' src={navlogo}></img></a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light me-4" type="submit">Search</button>
            <button class="btn auth-btn btn-outline-light me-2" type=""><Link className='text-white text-decoration-none' to="/login" >Login</Link></button>
            <button class="btn auth-btn btn-outline-light" type=""><Link className='text-white text-decoration-none' to="/signup" >Signup</Link></button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
