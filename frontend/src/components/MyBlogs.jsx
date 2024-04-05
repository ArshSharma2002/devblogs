import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'
import { useOutletContext } from 'react-router-dom'
import Login from './Login'

function MyBlogs() {

  const [blogs, setBlogs] = useState([])
  const [isLoggedin] = useOutletContext()

  const handleOnDelete = async (blogid) => {
    try {
      console.log("Deleting blog...")
      const confirmDel = confirm("Confirm delete")
      if (!confirmDel) {
        return;
      }
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
      getMyBlogs()
      console.log(deletedBlog)

    } catch (error) {
      console.log("Error logging out: ", error)
    }
  }

  const getMyBlogs = async () => {
    try {
      console.log("fetching my blogs...")
      const url = 'http://localhost:8000/api/v1/blogs/myblogs'
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const fetchedBlogs = await response.json()
      setBlogs(fetchedBlogs.data)

    } catch (error) {
      console.log("Error fetching blog : ", error)

    }
  }

  useEffect(() => {
    getMyBlogs()
  }, [])


  return (
    <>
      {!isLoggedin ?  <Login/> :
        <div className='py-5 my-5 d-flex flex-direction-row justify-content-center align-items-center flex-wrap'>
          {blogs.map(blog => <BlogPost key={blog._id} handleOnDelete={handleOnDelete} blog={blog} />)}
        </div>}
    </>
  )
}

export default MyBlogs
