import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';


function Upload( { file, title, date } ) {

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
        <div>
        </div>
    );
}

export default Upload;
