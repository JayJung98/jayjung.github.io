import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MarkDown from 'markdown-to-jsx';

function Mdpost( file ) {

    const file_name = file;

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

    return (
        <div className="mdpost">
            <Header/>
            <MarkDown>{ post }</MarkDown>
            <Footer/>
        </div>
    );
}
export default Mdpost;