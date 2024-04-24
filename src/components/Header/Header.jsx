import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

function Header({ logo }) {
    // useState variables to control mobile menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={click ? 'navbar active' : 'navbar'}>
            <div className="nav-items-container">
                <Link to='/' className='navbar-logo'>{logo}</Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>
                            Teams
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;