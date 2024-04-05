import React, { useEffect, useState } from 'react'
import signupImg from '../images/illustrations/signup.gif'
import { useNavigate } from 'react-router-dom'



function Signup() {


  const [username, setUsername] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  const registerUser = async ({username:username, fullname:fullname, email:email, password:password}) => {
    try {
      console.log("registering user...")

      const url = "http://localhost:8000/api/v1/user/register";
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
  
        },
        body: JSON.stringify({username:username, fullname:fullname, email:email, password:password})
      });
  
      const newUser = await response.json()

      console.log(newUser)

    } catch (error) {
      console.log("Error registering user: ", error)
      
    }
  }

  const handleOnSignup = async(e) =>{
    e.preventDefault()
    console.log("Signing in .....")
    registerUser({username:username, fullname:fullname, email:email, password:password})
    console.log("User registered !")
    setEmail('')
    setUsername('')
    setFullname('')
    setPassword('')
    navigate('/login')

  }

  useEffect(() => {
    
  }, [])
  




  return (
    <>
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="bg-light text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4 p-5">

                      <div className="text-center">
                          <h4 className="mt-1 mb-5 pb-1">Signup</h4>
                      </div>

                      <form onSubmit={handleOnSignup}>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="username">User Name</label>
                          <input type="text" id="username" className="form-control"
                            placeholder="User Name" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="fullname">Full Name</label>
                          <input type="text" id="fullname" className="form-control"
                            placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)} value={fullname}/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">Email</label>
                          <input type="email" id="email" className="form-control"
                            placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input type="password" id="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-lg btn-primary m-3 bg-violet" type="submit">Signup</button>
                          {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                        </div>

                        {/* <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already registered ?</p>
                          <button type="submit" className="btn btn-outline-danger">Login</button>
                        </div> */}

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 d-flex align-items-center justify-content-center">
                      {/* <h4 className="mb-4">Signup now on DevBlogs !</h4> */}
                      <img className="illustrations bg-white huerotate" src={signupImg}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
