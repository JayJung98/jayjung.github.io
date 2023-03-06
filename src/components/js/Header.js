import React from "react";
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    function titleClick() {
        window.location.reload();
    }
    return (
        <div className="header">
            <Link to = '/' className="title">Jay</Link>
            <div className="menus">
                {/* <a className="menu" href='/aboutme'>
                    About Me
                </a> */}
                <Link to = '/aboutme' className="menus">AboutMe</Link>
                <Link to = '/posts' className="menus">Posts</Link>
                <Link to = '/category' className="menus">Category</Link>
                <Link to = '/search' className="menus">Search</Link>
                {/* <a className="menu" href='/posts'>
                    Posts
                </a>
                <a className="menu" href='/category'>
                    Category
                </a>
                <a className="menu" href='/search'>
                    Search
                </a> */}
            </div>
        </div>
    );
}
export default Header;