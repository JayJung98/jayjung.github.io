import React from 'react';
import '../css/Homepage.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function homepage() {
    return (
            <div className="homepage">
            <Header/>
            <Main/>
            {/* <img src="./images/yang01.jpg" className="App-logo" /> */}
            {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
            <Footer/>
         </div>
    );
}
export default homepage;