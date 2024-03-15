import React, { useState } from 'react'

function CreateBlog() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [source, setSource] = useState('')
  const [tag, setTag] = useState('')


  const createblog = async ({title:title, description:description, source:source, tag:tag}) => {
    try {
      console.log("Creating blog...")

      const url = "http://localhost:8000/api/v1/blogs/create";
      const response = await fetch(url, {
        method: 'POST', 
        redirect: 'follow',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
  
        },
        body: JSON.stringify({title:title, description:description, source:source, tag:tag})
      });
  
      const newBlog = await response.json()

      console.log(newBlog)

    } catch (error) {
      console.log("Error registering user: ", error)
      
    }
  }

  const handleOnCreate = async (e) => {
    e.preventDefault()
    createblog({title, description, source, tag})
    setTitle('')
    setDescription('')
    setSource('')
    setTag('')
  }


  return (
    <div className='container bg-light my-5'>
      <div className="col-lg-6 bg-white-subtle m-5 rounded-3">
        <div className="card-body p-md-5 mx-md-4">
          <div className="text-center">
            <h4 className="mt-1 mb-5 pb-1">Create Blog</h4>
          </div>


          <form onSubmit={handleOnCreate}>

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
            {/* <div className="form-outline mb-4">
              <label className="form-label" htmlFor="thumbnail">Thumbnail</label>
              <input type="file" className="form-control-file" id="thumbnail" />
            </div> */}
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
    </div>
  )
}

export default CreateBlog
