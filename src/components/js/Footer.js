import React from 'react';
import '../css/Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Portfolio from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className='footer'>
            <div className='jfloww'>
                2023 @ jfloww. Crafted & Designed by Jaehoon Jung
            </div>
            <div className='link_box'>
                <GitHubIcon className="footer_icon" />
                <Link to ="https://github.com/jfloww" className='footer_text' target='_blank'>
                    GitHub
                </Link>
                <LinkedInIcon className='footer_icon' />
                <Link to = "https://www.linkedin.com/in/jfloww/" className='footer_text' target='_blank'>
                    LinkedIn
                </Link>
                <Portfolio className='footer_icon' />
                <Link to = "https://www.jfloww.com" className='footer_text' target='_blank'>
                    Portfolio
                </Link>
                <Instagram className='footer_icon' />
                <Link to = "https://www.instagram.com/jaehoon_jung98/" className='footer_text' target='_blank'>
                    Instagram
                </Link>
                <EmailIcon className='footer_icon' />
                <Link to = "/contact" className='footer_text'>
                    Contact
                </Link>
            </div>
        </div>
    );
}
export default footer;