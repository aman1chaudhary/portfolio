import React, { useState } from 'react';
import Logo from "../public/images/logo.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <div className="navbar_container ">
            <div className="navbar__logo">
                <Link href="/">
                    <Image src={Logo} alt="nav_logo" />
                </Link>
            </div>

            <button className="navbar__toggle" onClick={handleToggle}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`main_nav container ${showMenu ? 'show' : ''}`}>
                <div className="nav__content">
                    <div className="main_nav_logo">
                        <Link href="/" onClick={handleLinkClick}>
                            <Image src={Logo} alt="nav_logo" />
                        </Link>
                    </div>

                    <div className="nav__list">
                        <div className="nav__item">
                            <Link href="/" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </div>

                        <div className="nav__item">
                            <Link href="/resume" onClick={handleLinkClick}>
                                Resume
                            </Link>
                        </div>

                        <div className="nav__item">
                            <Link href="/portfolio" onClick={handleLinkClick}>
                                Portfolio
                            </Link>
                        </div>

                        {/* <div className="nav__item">
                            <Link href="/blogs" onClick={handleLinkClick}>
                                Blogs
                            </Link>
                        </div> */}


                    
                        <div className="nav__item">
                            <Link href="/contact" onClick={handleLinkClick}>
                                Contact 
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar
