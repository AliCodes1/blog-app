import React, { useState, useEffect } from 'react'
import './Blog.css'
import EditorComponent from './Editor';
import { useSelector, useDispatch } from 'react-redux'
import { addBlog, updateBlog, deleteBlog } from "./blogSlice"
import DataFetch from './DataFetch';
function Blog() {
    const [currentKey, setCurrentKey] = useState(null);
    
    const blogs = useSelector(state => state.blog.blogs)
    const dispatch = useDispatch()
    function handleBlogClick(key) {
        console.log("clicked")
        setCurrentKey(key);
    }

    const handleClick = () => {
        setCurrentKey(blogs.length);

        const newBlog = {
            id: blogs.length,
            title: 'Name of blog',
            content: {
                blocks: [
                    {
                        type: 'header',
                        data: {
                            text: 'Editor.js Text Editor',
                            level: 1,
                        },
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Start typing here...',
                        },
                    },
                ],
                version: '2.15.0',
            },
        };
        dispatch(addBlog(newBlog));
    };

    const handleSave = (id, content) => {
        dispatch(updateBlog({ id, content })); // Pass content.content
        
    };

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));

    };


    return (
        <div className="view">
            <div className="sidebar">
                <button className="btn btn-primary" onClick={handleClick}>
                    +
                </button>
                {blogs.length === 0 ? (
                    <div>Click + to create a blog</div>
                ) : (
                    blogs.map(blog => (

                        <div className={`blog ${blog.id === currentKey ? "dark" : "light"}`} key={blog.id} onClick={() => handleBlogClick(blog.id)}>
                            {blog.title && <p>{blog.title}</p>}
                        </div>


                    ))
                )}
            </div>
            
            <div className="editor">
                {currentKey === null ? (
                    <div>There are no blogs</div>
                ) : (
                    <>
                        {blogs.map(blog => {
                            if (blog.id === currentKey) {
                                return (
                                    <EditorComponent
                                        key={blog.id}  // Assign a key when rendering lists of components
                                        id={currentKey}
                                        initialContent={blog.content}
                                        onSave={handleSave}
                                        onDelete={handleDelete}
                                    />
                                );
                            }
                            return null; // Return null for blogs that don't match the currentKey
                        })}
                    </>
                )}
            </div>

        </div>
    );
}

export default Blog;

