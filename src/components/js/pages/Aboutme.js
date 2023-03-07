import React from 'react';
import '../../css/pages/Aboutme.css'
import Header from '../Header';
import Footer from '../Footer';

function aboutme() {
    return (
        <div className='aboutme'>
            <Header/>
                <h1>Hello, Welcome to my Blog </h1><br/>
                <h2>I am a Software Engineer and Data Scientist </h2><br/>
                <h3>This is Jay (Jaehoon) Jung</h3>
                <div className='tech_stacks'>
                    Technology Stacks:
                    HTML, CSS, JavaScript, React, Python, Git, GitHub, SAS, R, MySQL, Oracle DB
                </div>
            <Footer/>
        </div>
    );
}
export default aboutme;