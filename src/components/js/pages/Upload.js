import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';


function Upload( { location, title, date } ) {
    const requireContext = require.context('../../posts', false, /\.md$/);
    const files = requireContext.keys();
    const newFiles = files.map((fileName) => fileName.replace('./', ''));

    const file_name = newFiles[0];
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
            { console.log(newFiles) }
        </div>
    );
}

export default Upload;
