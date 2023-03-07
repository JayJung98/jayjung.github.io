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
                <Link to = '/aboutme' className="menu">About Me</Link>
                <Link to = '/posts' className="menu">Posts</Link>
                <Link to = '/category' className="menu">Category</Link>
                <Link to = '/search' className="menu">Search</Link>
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