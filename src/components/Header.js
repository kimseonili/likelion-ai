import React from 'react';
import './Header.css';
import info_header_img1 from './img/info_header_1.jpg';
import info_logo from './img/logo_2.png'

const Header = () => {
    

    return (
        <header>
            <div className='info_logo'>
                <a href='/'><img src={info_logo}></img></a>
            </div>
            <div className='info_header_img'>
                <p className='info_header_imgcenter'><img src={info_header_img1}></img></p>
            </div>
            <div className='info_banner'>
                <div className='info_banner_content'>
                    <a href='#albumlist'>PHOTO</a>
                    <a href='#photolist'>WORKS</a>
                </div>
            </div>
        </header>
    );
}

export default Header;