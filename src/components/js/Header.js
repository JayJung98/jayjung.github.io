import React from "react";
import '../css/Header.css'

function Header() {
    function titleClick() {
        window.location.reload();
    }
    return (
        <div className="header">
            <sapn className='title' onClick={ titleClick }>
                Jay's Note
            </sapn>
            <div className="menus">
                <a className="menu" href='/aboutme'>
                    About Me
                </a>
                <a className="menu" href='/posts'>
                    Posts
                </a>
                <a className="menu" href='/category'>
                    Category
                </a>
                <a className="menu" href='/search'>
                    Search
                </a>
            </div>
        </div>
    );
}
export default Header;