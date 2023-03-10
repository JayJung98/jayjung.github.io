import React from 'react';
import '../css/Main.css'
import Profile from './Profile';
import { Link } from 'react-router-dom';

function main() {
    return (
        <div className='main'>
            <div className='big_box'>
                <img className='test_image' src='/images/test_photo.jpg' />
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
                <a className='small_box3' href='https://github.com/jfloww/jfloww.github.io' target='_blank'>
                    download this theme
                </a>
            </div>
        </div>
    );
}
export default main;