import React from 'react';
import '../css/Main.css'

function main() {
    return (
        <div className='main'>
            <div className='main_left'>
                <img className='main_photo' src='../../images/jay01.jpg'/>
                <div className='main_name'>
                   Jay (Jaehoon) Jung
                   <hr/>
                </div>
                <div className='main_text'>
                    US: TX - NY - AL <br/>
                    KR: Seoul <br/>
                    Software Engineer <br/>
                    Data Scientist <br/>
                </div>
            </div>
            <div className='side'>
                <div className='side_text'>
                    Welcome to my Blog
                </div>
            </div>
        </div>
    );
}
export default main;