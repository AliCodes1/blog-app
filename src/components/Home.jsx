import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Blog.css'
import {Link} from 'react-router-dom'
function Home() {
  const blogs = useSelector(state => state.blog.blogs)

  return (
    <div >
      {blogs.length === 0 ? (
        <div>No blogs available</div>
      ) : (
        <>{blogs.map(blog => (
          <div className='blog blog-container'>
          <Link className="blog-link"to={`/blog/${blog.id}`} key={blog.id}>
            {blog.title}
          </Link>
          </div>
        ))}
        </>
       
        
      )}
    </div>
  );
  
}

export default Home