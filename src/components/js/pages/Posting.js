import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MarkDown from 'markdown-to-jsx';
import Sidebar from '../Sidebar';
import '../../css/pages/Posting.css'

function Posting( fileName ) {

    const file_name = fileName.fileName;
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../../posts/${file_name}`)
        .then((res) => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res));
        })
        .catch((err) => console.log(err));
    });

    return(
        <div>
            <Header />
            <div className='posting_container'>
                <Sidebar className='posting_sidebar'/>
                <MarkDown className='posting_post'>{ post }</MarkDown>
            </div>
            <Footer />
        </div>
    );
}
export default Posting;