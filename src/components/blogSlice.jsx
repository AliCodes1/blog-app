import { createSlice } from '@reduxjs/toolkit';
import db from './db'

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
    },
    reducers: {
        addBlog: (state, action) => {
            //db(action.payload,'add')
            state.blogs.push(action.payload);
        },
        updateBlog: (state, action) => {
            const { id, content } = action.payload;

            // Find the index of the blog to update
            const indexToUpdate = state.blogs.findIndex(blog => blog.id === id);

            if (indexToUpdate !== -1) {
                // Create a copy of the updated blog with new content
                const updatedBlog = { ...state.blogs[indexToUpdate], title: content.blocks[0].data.text, content: content };

                // Remove the blog from its current position
                state.blogs.splice(indexToUpdate, 1);

                // Add the updated blog at the beginning of the array
                state.blogs.unshift(updatedBlog);
            }
        }
        ,
        deleteBlog: (state, action) => {
            //db(action.payload,'delete')
            state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);

        }

        
    }
});

export const { addBlog, updateBlog, deleteBlog} = blogSlice.actions;
export default blogSlice.reducer;

