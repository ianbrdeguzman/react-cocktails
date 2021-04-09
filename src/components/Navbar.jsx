import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/cocktails/'>
                    <img
                        src='https://raw.githubusercontent.com/john-smilga/react-projects/0a0d36c196cc55f8e68166b990c1c46bc89c694c/15-cocktails/setup/src/logo.svg'
                        alt='Logo'
                        className='logo'
                    />
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to='/react-cocktails/'>home</Link>
                    </li>
                    <li>
                        <Link to='/react-cocktails/about'>about</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
