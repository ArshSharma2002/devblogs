import React from 'react'
import signupImg from '../images/signup-img.jpg'

function Signup() {
  return (
    <>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="bg-light text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">

                      <div class="text-center">
                          <h4 class="mt-1 mb-5 pb-1">Signup</h4>
                      </div>

                      <form>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="username">User Name</label>
                          <input type="text" id="username" class="form-control"
                            placeholder="User Name" />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="email">Email</label>
                          <input type="email" id="email" class="form-control"
                            placeholder="Email address" />
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="fullname">Full Name</label>
                          <input type="text" id="fullname" class="form-control"
                            placeholder="Full Name" />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="password">Password</label>
                          <input type="password" id="password" class="form-control" placeholder="Password" />
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button class="btn btn-lg btn-primary m-3 bg-violet" type="button">Signup</button>
                          <a class="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Already registered ?</p>
                          <button type="button" class="btn btn-outline-danger">Login</button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">Signup now on DevBlogs !</h4>
                      <img className="illustrations huerotate" src={signupImg}></img>
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
