import React from 'react';
import './topBar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebookF, faInstagram, faFontAwesome);

const TopBar = () => {
    return (
        <div className='topBar'>
            <div className="container">
                <div className="topBarInner">
                    <div className="topBarLink">
                        <Link to='/product' className='item'>
                            Phone
                        </Link>
                        <Link to='/' className='item'>
                            Laptop
                        </Link>
                        <Link to='/' className='item'>
                            Watch
                        </Link>
                        <Link to='/' className='item'>
                            TV
                        </Link>
                        <Link to='/' className='item'>
                            Mac
                        </Link>
                        <Link to='/' className='item'>
                            iPad
                        </Link>
                    </div>
                    <div className="topBarSocial">
                        <Link to='/' className='icon fb'>
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                        </Link>
                        <Link to='/' className='icon tw'>
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </Link>
                        <Link to='/' className='icon ins'>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
