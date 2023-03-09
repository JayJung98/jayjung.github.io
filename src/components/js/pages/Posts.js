import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Upload from './Upload';
import '../../css/pages/Posts.css'
import React from 'react';


function Posts() {
    const requireContext = require.context('../../posts', false, /\.md$/);
    const files = requireContext.keys();
    const newFiles = files.map((fileName) => fileName.replace('./', ''));

    return (
        <div className='posts'>
            <Header />
            <div className='post_container'>
                <Sidebar className='sidebar' />

                <div className='post_box'>
                    { newFiles.map((file, index) => {
                            return (
                                <div key={index}>
                                    <Upload file={ file } title={ file } />
                                </div>
                            );}) 
                    }
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Posts;
