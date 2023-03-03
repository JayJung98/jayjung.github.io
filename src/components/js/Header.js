import React from "react";
import '../css/Header.css'

function Header() {
    function titleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="header">
            <div className="title">
                Jay's Note
            </div>
            <div className="menus">
                <div className="menu">
                    About Me
                </div>
                <div className="menu">
                    Posts
                </div>
                <div className="menu">
                    Category
                </div>
                <div className="menu">
                    Search
                </div>
            </div>
        </div>
    );
}
export default Header;