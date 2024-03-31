import React, { useEffect, useState } from 'react'
import blogimage from '../images/devblog-bg-3.jpg'
import { Link, useLocation } from 'react-router-dom'

function BlogPost({ blog, handleOnDelete }) {


    const [userBlogs, setUserBlogs] = useState(null)
    const urlpath = useLocation()

    useEffect(() => {
        if (urlpath.pathname == '/myblogs') {
            setUserBlogs(true)
        } else {
            setUserBlogs(false)
        }

    }, [])


    return (
        <div className='container max-w-xs m-5'>
            <div className="card bg-violet transition ease-in-out delay-150 -translate-y-px-hover duration-300 scale-105-hover text-light">
                <div className="card-header d-flex align-items-center">
                    <div className="ms-3">
                        <h6 className="mb-0 fs-sm">{blog.title}</h6>
                        <span className="text-discovery fs-sm">{blog.createdAt.substring(0, 10)}</span>
                    </div>
                    {userBlogs && <div className="dropdown-center  ms-auto">
                        <button className="btn text-muted" type="btn" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <ul className="dropdown-menu p-0">
                            <li id='editbtn' className='p-2'>
                                <Link to={`/blogs/updateblog/${blog._id}`} className='text-decoration-none text-dark'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                            </li>
                            <li id='deletebtn' className='p-2' onClick={() => handleOnDelete(blog._id)}><i className="fa-solid fa-trash"></i> Delete</li>
                        </ul>
                    </div>}
                </div>
                <img src={blog.thumbnail?blog.thumbnail:blogimage} width="100" height="180" className="card-img-top" alt="Image loading..." />
                <div className="card-body">
                    <p className="card-text">
                        {blog.description.substring(0, 50)} ...
                    </p>
                </div>
                <div className="card-footer d-flex">
                    <button className="btn btn-link p-0 me-auto fw-bold text-decoration-none " href="#">Read Blog</button>
                    {/* <button className="btn btn-subtle" type="button"><i className="fas fa-heart fa-lg"></i></button>
                    <button className="btn btn-subtle" type="button"><i className="fas fa-share fa-lg"></i></button> */}
                </div>
            </div>
        </div>
    )
}

export default BlogPost
