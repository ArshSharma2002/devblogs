import React from 'react'
import BlogPost from './BlogPost'

function Blogs() {
  return (
    <>
    <h1 className='text-white bg-violet headings mb-5' >Blogs</h1>
    <div className='py-5 d-flex flex-direction-row justify-content-center align-items-center flex-wrap'>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
    </div>
    </>
  )
}

export default Blogs
