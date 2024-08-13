import React, { useState } from 'react';
import './sidebar.css';
import { CiLogin } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaBars, FaSignInAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/',
            name: "dashboard",
            icon: <MdDashboard />
        },
        {
            path: '/About',
            name: "About",
            icon: <IoMdHome />
        },
        {
            path: '/Login',
            name: "Login",
            icon: <IoLogOut />
        },
        {
            path: '/Register',
            name: "Register",
            icon: <FaSignInAlt />
        },
        {
            path: '/Contact',
            name: "Contact",
            icon: <IoMdContact />
        }
    ];
    return (
        <div className="container">
            <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Side Panel</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
