import React from 'react'
import error500 from '../images/illustrations/error500.gif'

function InternalServerError() {
  return (
    <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100 rounded-3">
                    <div className="col-xl-10">
                        <div className="bg-white text-black rounded-4">
                            <div className="row g-0">
                                <div className="col-lg d-flex align-items-center justify-content-center">
                                    <img className="text-center w-50 huerotate" src={error500}></img>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default InternalServerError
