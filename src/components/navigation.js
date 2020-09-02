import React from 'react'
import { Link } from 'gatsby'
const Navigation = () => (
    <nav className="sm:max-w-screen-lg sm:m-auto">
        <ul className="flex justify-end p-5">
            <li className="mr-5">
                <Link to="/" activeClassName="opacity-50 line-through">Home</Link>
            </li>
            <li className="mr-5">
                <Link to="/blog" activeClassName="opacity-50 line-through">Blog</Link>
            </li>
            <li>
                <Link to="/work" activeClassName="opacity-50 line-through">Work</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation