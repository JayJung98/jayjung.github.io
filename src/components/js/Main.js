import React from 'react';
import '../css/Main.css'
import Profile from './Profile';

function main() {
    return (
        <div className='main'>
            <div className='big_box'>
                Recent posts (top 5)
            </div>
            <Profile className='profile'/>
            <div className='container'>
                <div className='small_box1'>
                    about me
                </div>
                <div className='small_box2'>
                    recent porject
                </div>
                <div className='small_box3'>
                    download this theme
                </div>
            </div>
        </div>
    );
}
export default main;