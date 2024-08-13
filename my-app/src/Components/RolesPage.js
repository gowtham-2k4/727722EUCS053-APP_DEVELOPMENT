import React from "react";
import halllogo from '../hall-logo.svg';
import userlogo from'../user-image.svg';
import adminlogo from '../admin-image.svg';
import './RolesPage.css';
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function RolesPage(){
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="title-text">
                <h1>Just Before You Sign Up...</h1>
                <h3>Which one applies to you</h3>
            </div>
           <div className="outer-roles-wrapper">
                <div className="outer-roles">
                    <div className="admin-div">
                        <img className="admin-logo" src={adminlogo} alt="admin-logo"></img>
                        <h1 className="roles-title">Admin</h1>
                        <h2>I am a Venue Administartor</h2>
                        <button className="btn-admin-login" onClick={() => { navigate("/adminlogin") }}>Login</button>
                    </div>
                    <div className="user-div">
                        <img className="user-logo" src={userlogo} alt="user-logo"></img>
                        <h1 className="roles-title">User</h1>
                        <h2>I am a Customer who want to make booking</h2>
                        <button className="btn-admin-login" onClick={() => { navigate("/Login") }}>Get Started</button>
                    </div>
                    
                </div>

           </div>
        </div>
    )
}
