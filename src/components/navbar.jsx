import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import React from 'react'
import Blog from './Blog'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Blogs</Link>
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="btn btn-outline-primary nav-btn" aria-current="page" to="/blog">Create Blog</Link>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar