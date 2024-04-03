import React, { useState } from 'react'
import blogImg from '../images/illustrations/createblog.gif'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Login from './Login'

function CreateBlog() {


  const [isLoggedin] = useOutletContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [source, setSource] = useState('')
  const [tag, setTag] = useState('')
  const [file, setFile] = useState()

  const navigate = useNavigate()


  const createblog = async ({ title: title, description: description, source: source, tag: tag }) => {
    try {
      console.log("Creating blog...")

      const url = "https://devblogs-backend.vercel.app/api/v1/blogs/create";
      const formData = new FormData()
      formData.append("thumbnail", file)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("tag", tag)
      formData.append("source", source)
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        credentials: 'include',
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // },
        body: formData

      });

      const newBlog = await response.json()

      console.log(newBlog)

    } catch (error) {
      console.log("Error registering user: ", error)

    }
  }

  const handleOnCreate = async (e) => {
    e.preventDefault()
    createblog({ title, description, source, tag })
    setTitle('')
    setDescription('')
    setSource('')
    setTag('')
    setFile('')
    // navigate('/blogs')
  }


  return (
    <>
      {!isLoggedin ? <Login /> : <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="bg-light text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4 p-5">

                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Create Blog</h4>
                      </div>

                      {/* form */}
                      <form onSubmit={handleOnCreate} >

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="title">Title</label>
                          <input type="text" id="title" className="form-control"
                            placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="description">Description</label>
                          <textarea id="inputGroup-sizing-lg description" type="text" rows="4" className="form-control"
                            placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="tags">Tags</label>
                          <input type="text" id="tags" className="form-control"
                            placeholder="Tags" onChange={(e) => setTag(e.target.value)} value={tag} />
                        </div>
                        {/* TODO */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="thumbnail">Thumbnail</label><br />
                          <input type="file" className="form-control-file" name='thumbnail' id="thumbnail" filename={file} onChange={e => setFile(e.target.files[0])} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="source">Source</label>
                          <input type="text" id="source" className="form-control" placeholder="Source" onChange={(e) => setSource(e.target.value)} value={source} />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-lg btn-primary m-3 bg-violet" type="submit">Create</button>
                        </div>

                      </form>

                    </div>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 d-flex align-items-center justify-content-center">
                      <img className="illustrations bg-white huerotate" src={blogImg}></img>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </>
  )
}

export default CreateBlog
