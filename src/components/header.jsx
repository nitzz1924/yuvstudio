import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let logo = "/assests/images/logofinalfinalfinal.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='headermain'>
            <header>
                <div className="logo">
                    <img src={logo} width="180" alt="logo" />
                </div>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    <a href="/" >Home</a>
                    <a href="/about" >About</a>
                    <a href="/#" >Advertising</a>
                    <a href="/contact" >Contact</a>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Off-Canvas Mobile Menu */}
                <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/" onClick={toggleMenu}>Home</a>
                    <a href="/about" onClick={toggleMenu}>About</a>
                    <a href="/#" onClick={toggleMenu}>Advertising</a>
                    <a href="/contact" onClick={toggleMenu}>Contact</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;
