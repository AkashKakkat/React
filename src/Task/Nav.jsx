import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        
            <nav>
                {/* logo */}
                <NavLink to='/' className={"logo"}>
                    MyWebsite
                </NavLink>

                {/* hamburger menu icon */}
                <div className='menu-icon' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* nav links */}
                <ul className={menuOpen ? "show" : ""}>
                    {/* home */}
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>

                    {/* about */}
                    <li>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>

                    {/* services */}
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setMenuOpen(false)}>
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Nav
