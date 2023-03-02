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
        </div>
    );
}
export default Header;