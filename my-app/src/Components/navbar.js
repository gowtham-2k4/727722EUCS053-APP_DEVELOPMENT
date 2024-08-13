import React , { useState } from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    return(
        
        <header>
        <h1 className='title'>Hallz</h1>
            <nav className='nav'>
                <ul className='nav-links'>
                    <li><a className='links'onClick={() => navigate('/home')}>Home</a></li>
                    <li><a className='links'>About Us</a></li>
                    <li><a className='links'>Contact Us</a></li>
                    
                </ul>
            </nav>
            <a className='ctn'><button onClick={() => navigate("/login")}>Sign In</button></a>
        </header>
        
    )
}

export default Navbar;