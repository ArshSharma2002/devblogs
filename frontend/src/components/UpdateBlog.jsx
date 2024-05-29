import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../helper.js'

function UpdateBlog() {

    const [newTitle, setNewTitle] = useState('')
    const [newDescripiton, setNewDescripiton] = useState('')

    const { blogid } = useParams()

    const navigate = useNavigate()

    const updateBlog = async (blogid) => {
        try {
            console.log("updating blog...")
            const url = `${BASE_URL}/api/v1/blogs/update/${blogid}`
            const response = await fetch(url, {
                method: 'PUT',
                redirect: 'follow',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle, description: newDescripiton })
            })

            const updatedBlog = await response.json()

            console.log(updatedBlog.data)

            console.log("returning to blogs.....")

        } catch (error) {
            console.log("Error updating blog : ", error)

        }
    }

    const handleOnUpdate = async (e) => {
        e.preventDefault()
        updateBlog(blogid)
        navigate("/blogs");
    }

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
                                                <h4 className="mt-1 mb-5 pb-1">Edit Blog</h4>
                                            </div>
                                            <form onSubmit={handleOnUpdate}>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="newtitle">New Title</label>
                                                    <input type="text" id="newtitle" className="form-control"
                                                        placeholder="New Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="newdescription">New Description</label>
                                                    <textarea type="text" id="newdescription" rows='3' className="form-control"
                                                        placeholder="New Description" value={newDescripiton} onChange={(e) => setNewDescripiton(e.target.value)} />
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-lg btn-primary m-3 bg-violet" type="submit" >Save</button>
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
        </>
    )
}

export default UpdateBlog
