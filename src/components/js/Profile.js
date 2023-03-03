import React from 'react';
import '../css/Profile.css'

function profile() {
    return (
        <div className='profile'>
            <a className='pro_menu' href="https://github.com/jfloww">
                GitHub
            </a>
            <a className='pro_menu' href="https://www.linkedin.com/in/jfloww/">
                LinkedIn
            </a>
            <a className='pro_menu'>
                Portfolio
            </a>
            <div className='pro_menu'>
                Contact
            </div>
        </div>
    );
}
export default profile;