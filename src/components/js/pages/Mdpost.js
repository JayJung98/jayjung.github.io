import React, { useState, useEffect } from 'react';
import Posting from './Posting';

function Mdpost() {

    const requireContext = require.context('../../posts', false, /\.md$/);
    const files = requireContext.keys();
    const newFiles = files.map((fileName) => fileName.replace('./', ''));
    const file_name = newFiles[0];


    return (
        <div className="mdpost">
            <Posting fileName={ file_name } />
        </div>
    );
}
export default Mdpost;