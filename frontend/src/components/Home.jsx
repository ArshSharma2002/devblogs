import React from 'react'
import homepageBg from '../images/logos/logo-white.png'

function Home() {
  return (
    <>
      <header className="py-5 bg-image-full py-5">
        <div className="text-center my-5 py-5 d-flex flex-column flex-wrap align-items-center justify-content-center">
          <span>
            <img className="img-fluid rounded-circle m-4 " src={homepageBg} alt="..." />
          </span>

          <div className="container">
            <h4 className="text-white mb-0">Unveiling the Chronicles of Development Excellence</h4>
            <h4 className="text-white my-1"> Your Daily Dose of Tips and Blogs!</h4>
            <div className="container p-5">
              <h6 className="text-white-50 my-5">At DevBlogs, we believe in the transformative power of coding. Whether you're a seasoned developer seeking advanced insights or a newcomer eager to learn, our platform is designed to be your go-to resource for expert tips, thought-provoking blogs, and the latest trends in the tech realm.</h6>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
