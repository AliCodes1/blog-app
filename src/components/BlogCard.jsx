import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditorComponent from './Editor';

function BlogCard() {
  const { blogId } = useParams();
  console.log("blog page", blogId);
  const blogs = useSelector(state => state.blog.blogs);

  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      
      <EditorComponent
        key={blog.id} // Assign a key when rendering lists of components
        id={blog.id}
        initialContent={blog.content}
      />
    </div>
  );
}

export default BlogCard;
