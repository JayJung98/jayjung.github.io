import React, { useState, useEffect } from 'react';
import '../../css/pages/Upload.css'
import { Link } from 'react-router-dom';

function Upload( { file, title } ) {

    const file_name = file;
    title = file_name.replace('.md', '');


    return (
        <div>
        <Link to={`/posts/${ title }`} className='list'><h1>{ title }</h1>
        </Link>
            
        </div>
    );
}

export default Upload;
