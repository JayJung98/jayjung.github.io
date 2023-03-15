import React from 'react';
import '../css/Profile.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Portfolio from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function profile() {
    return (
        <div className='profile'>
            <div className='pro_menu'>
                <GitHubIcon className="icon" />
                <Link to ="https://github.com/jfloww" className='text' target='_blank'>
                    GitHub
                </Link>
                <LinkedInIcon className='icon' />
                <Link to = "https://www.linkedin.com/in/jfloww/" className='text' target='_blank'>
                    LinkedIn
                </Link>
                <Portfolio className='icon' />
                <Link to = "https://jfloww.github.io/" className='text' target='_blank'>
                    Blog
                </Link>
                <Instagram className='icon' />
                <Link to = "https://www.instagram.com/jaehoon_jung98/" className='text' target='_blank'>
                    Instagram
                </Link>
                <EmailIcon className='icon' />
                <Link to = "/contact" className='text'>
                    Contact
                </Link>
            </div>
        </div>
    );
}
export default profile;