import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import {BASE_URL} from '../helper.js'



function App() {

  const [isLoggedin, setIsLoggedin] = useState(null)

  const userLoggedIn = async () => {
    try {
      console.log("login status checking...")
      const url = `${BASE_URL}/api/v1/user/isloggedin`
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'

        }
      })

      const loginstatus = await response.json()

      setIsLoggedin(loginstatus.data.loginstatus)
      // console.log(loginstatus.data.loginstatus)

    } catch (error) {
      console.log("Login status Error !!!")
    }
  }

  useEffect(() => {
    userLoggedIn()
  }, [])
  

  return (
    <>
      <Navbar setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
      <Outlet context={[isLoggedin, setIsLoggedin]} />
      <Footer />
    </>
  )
}

export default App
