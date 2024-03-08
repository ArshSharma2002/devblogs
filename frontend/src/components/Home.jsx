import React from 'react'
import homepageBg from '../images/logos/logo-white.png'
import Blogs from './Blogs'

function Home() {
  return (
    <>
      <header class="py-5 bg-image-full py-5">
        <div class="text-center my-5 py-5 d-flex flex-column flex-wrap align-items-center justify-content-center">
          <span>
            <img class="img-fluid rounded-circle m-4 " src={homepageBg} alt="..." />
          </span>
          <h4 class="text-white mb-0">Unveiling the Chronicles of Development Excellence</h4>
          <h4 class="text-white my-1"> Your Daily Dose of Tips and Blogs!</h4>
          <p class="text-white-50 my-5 max-w-lg">At DevBlogs, we believe in the transformative power of coding and the continuous pursuit of excellence in the ever-evolving world of development. Whether you're a seasoned developer seeking advanced insights or a newcomer eager to learn, our platform is designed to be your go-to resource for expert tips, thought-provoking blogs, and the latest trends in the tech realm.</p>
        </div>
      </header>
      <Blogs/>
    </>
  )
}

export default Home
