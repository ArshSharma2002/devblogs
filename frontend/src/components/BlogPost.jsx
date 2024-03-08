import React from 'react'
import blogimage from '../images/devblog-bg-3.jpg'

function BlogPost() {
    return (
        <div className='container max-w-xs m-5'>
            <div class="card bg-violet transition ease-in-out delay-150 -translate-y-px-hover duration-300 scale-105-hover text-light">
                <div class="card-header d-flex align-items-center">
                    <div class="ms-3">
                        <h6 class="mb-0 fs-sm">Shrimp and Chorizo Paella</h6>
                        <span class="text-discovery fs-sm">September 14, 2022</span>
                    </div>
                    <div class="dropstart ms-auto">
                        <button class="btn text-muted" type="btn" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </div>
                </div>
                <img src={blogimage} class="card-img-top" alt="green iguana" />
                <div class="card-body">
                    <p class="card-text">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        Add 1 cup of frozen peas along with the mussels, if you like.
                    </p>
                </div>
                <div class="card-footer d-flex">
                    <button class="btn btn-link p-0 me-auto fw-bold" href="#">Action</button>
                    <button class="btn btn-subtle" type="button"><i class="fas fa-heart fa-lg"></i></button>
                    <button class="btn btn-subtle" type="button"><i class="fas fa-share fa-lg"></i></button>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
