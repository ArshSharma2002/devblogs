import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogItem() {

    const { blogid } = useParams()
    const [blog, setBlog] = useState({title:"", description:"", thumbnail:"", tag:"", createdAt:"", source:""})

    const getBlogById = async (blogid) => {
        try {
            console.log("fetching blog...")
            const url = `http://localhost:8000/api/v1/blogs/${blogid}`
            const response = await fetch(url, {
                method: 'GET',
                redirect: 'follow',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const blog = await response.json()

            console.log(blog.data)
            setBlog(blog.data)

            console.log("returning to blogs.....")

        } catch (error) {
            console.log("Error updating blog : ", error)

        }
    }

    
    useEffect(() => {
        getBlogById(blogid)
    }, [])

    let [day, setDay] = useState(new Date(blog.createdAt.substring(0, 10)).getDate())
    


    return (
        <div className='m-5 p-4'>
            <div class="d-flex justify-content-center align-items-center flex-direction-row flex-wrap">
                <div class="p-4">
                    <img src={blog.thumbnail} className='rounded-3' height="50%" width="60%" />
                </div>
                <div class="m-2 p-4">
                    <h2 class="blog-title">{blog.title}</h2>
                    <p className='text-white' >{`${new Date(blog.createdAt.substring(0, 10)).getDate()} ${new Date(blog.createdAt.substring(0, 10)).toLocaleString('default', { month: 'long' })}`} | {blog.source}</p>
                    <p class="blog-desc lead fw-normal py-4">{blog.description}</p>
                    <span class="badge bg-violet p-2">{blog.tag}</span>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
