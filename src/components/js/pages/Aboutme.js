import React from 'react';
import '../../css/pages/Aboutme.css'
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

function aboutme() {
    return (
        <div className='aboutme'>
            <Header />
            <div className='about_container'>
                <Sidebar className='sidebar' />
                <div className='about_box'>
                    <h1>Hello, Welcome to my Blog </h1><br/>
                    <h2>I am a Software Engineer and Data Scientist </h2><br/>
                    <h3>This is Jay (Jaehoon) Jung</h3>
                    <img className='test_me' src='/images/jay01.jpg' />
                    <div className='tech_stacks'>
                        Technology Stacks:
                        HTML, CSS, JavaScript, React, Python, Git, GitHub, SAS, R, MySQL, Oracle DB
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default aboutme;