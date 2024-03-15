import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'

function Blogs() {

  const [blogs, setBlogs] = useState([])

  const handleOnDelete = async (blogid) => {
    try {
        console.log("Deleting blog...")
        const url = `http://localhost:8000/api/v1/blogs/delete/${blogid}`
        const response = await fetch(url, {
            method: 'DELETE',
            redirect: 'follow',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const deletedBlog = await response.json()
        getBlogs()
        console.log(deletedBlog)

    } catch (error) {
        console.log("Error logging out: ", error)
    }
}

  const getBlogs = async () => {
    try {
      console.log("fetching blogs...")
      const url = 'http://localhost:8000/api/v1/blogs'
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const fetchedBlogs = await response.json()

      console.log(fetchedBlogs.data)
      
      setBlogs(fetchedBlogs.data)

    } catch (error) {
      console.log("Error fetching blog : ", error)

    }
  }

  useEffect(() => {
    getBlogs()
  }, [])
  

  return (
    <>
      {/* <h1 className='text-white bg-violet headings mb-5' >Blogs</h1> */}
      <div className='py-5 my-5 d-flex flex-direction-row justify-content-center align-items-center flex-wrap'>
        {blogs.map(blog=> <BlogPost key={blog._id} handleOnDelete={handleOnDelete} blog={blog} />)}
      </div>
    </>
  )
}

export default Blogs
