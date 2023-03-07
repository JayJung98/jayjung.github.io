import React from 'react';
import '../css/Main.css'
import Profile from './Profile';
import { Link } from 'react-router-dom';

function main() {
    return (
        <div className='main'>
            <div className='big_box'>
                Recent posts (top 5)
            </div>
            <Profile className='profile'/>
            <div className='container'>
                <Link to = '/aboutme' className='small_box1'>
                        <br/>Jay (Jaehoon) Jung<br/>
                        Software & Data Engineer
                        <hr/>
                </Link>
                <div className='small_box2'>
                    recent project or IT news
                </div>
                <a className='small_box3' href='https://github.com/jfloww/jfloww.github.io'>
                    download this theme
                </a>
            </div>
        </div>
    );
}
export default main;