import React, { useState } from 'react'
import loginImg from '../images/illustrations/login.gif'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { BASE_URL } from '../../helper.js'

function Login() {

    const [isLoggedin, setIsLoggedin] = useOutletContext()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginUser = async ({ username: username, email: email, password: password }) => {
        try {
            console.log("user login...")
            const url = `${BASE_URL}/api/v1/user/login`
            const response = await fetch(url, {
                method: 'POST',
                redirect: 'follow',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ username: username, email: email, password: password })
            })

            const loggedinUser = await response.json()

            setIsLoggedin(true)

            console.log(loggedinUser)

        } catch (error) {
            console.log("Error logging in: ", error)
        }
    }

    const handleOnLogin = async (e) => {
        e.preventDefault()
        console.log("logging in ...")
        loginUser({ username: username, email: email, password: password })
        console.log("User logged in !")
        setUsername('')
        setEmail('')
        setPassword('')
        navigate('/')

    }


    return (
        <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="bg-light text-black">
                            <div className="row g-0">
                                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 d-flex align-items-center justify-content-center">
                                        {/* <h4 className="mb-4 text-dark">Login now on DevBlogs !</h4> */}
                                        <img className="text-center illustrations huerotate" src={loginImg}></img>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4 p-5">
                                        <div className="text-center">
                                            <h4 className="mt-1 mb-5 pb-1">Login</h4>
                                        </div>
                                        <form onSubmit={handleOnLogin}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="username">User Name</label>
                                                <input type="text" id="username" className="form-control"
                                                    placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input type="email" id="email" className="form-control"
                                                    placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-lg btn-primary m-3 bg-violet" type="submit" >Login</button>
                                                
                                                {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link type="button" className="btn btn-outline-danger"to='/signup' >Sign up</Link>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
