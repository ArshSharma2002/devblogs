import React from 'react'
import navlogo from '../images/logos/logo-white-transparent.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isLoggedin, setIsLoggedin }) {

  const navigate = useNavigate()

  const handleOnLogout = async () => {
    try {
      // console.log("user logout...")
      const url = 'https://devblogs-backend.vercel.app/api/v1/user/logout'
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const loggedoutUser = await response.json()

      if (loggedoutUser.statusCode == 200) {
        setIsLoggedin(false)
      }

      console.log(loggedoutUser)

      navigate('/login')

    } catch (error) {
      console.log("Error logging out: ", error)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-violet position-sticky top-0 z-1">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-light" to='/' ><img id='navlogo' className='m-2' src={navlogo}></img></Link>
          <div className="collapse navbar-collapse mx-5" id="navbarExample">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown" >
                <a className={`nav-link dropdown-toggle text-white ${!isLoggedin ? 'notAllowed' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={!isLoggedin} >Blogs</a>{/* disabled={!isLoggedin} */}
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/myblogs">My Blogs</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/blogs">All Blogs</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/createblog">Create Blog</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center flex-column flex-lg-row">
              {!isLoggedin ? <>
                <button className="btn auth-btn btn-outline-light me-4 m-2" type=""><Link className='btn-auth text-decoration-none' to="/login" >Login</Link></button>
                <button className="btn auth-btn btn-outline-light me-4 m-2" type=""><Link className='btn-auth text-decoration-none' to="/signup" >Signup</Link></button>
              </> :
                <button className="btn auth-btn btn-outline-light m-4" type="button" onClick={handleOnLogout}>Logout</button>}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
