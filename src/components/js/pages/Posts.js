import React from 'react';
import '../../css/pages/Posts.css'
import Header from '../Header';
import Footer from '../Footer';

function posts() {
    return (
        <div className='posts'>
            <Header/>
            This is posts Page.
            <Footer/>
        </div>
    );
}
export default posts;