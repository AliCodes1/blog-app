import react, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import store from './components/store'
import { Provider } from 'react-redux'
import BlogCard from './components/BlogCard'
function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:blogId" element={<BlogCard/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}

export default App
