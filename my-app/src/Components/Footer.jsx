import React from "react";
import './footer.css';
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
export default function Footer() {

    return (
        <div className="main-footer">
            <div className="container">
                <card className="f1card">
                <div>
                    <h1>Find Your Perfect Venue.</h1>
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        label="Email"
                    >
                        Email
                    </TextField>
                </div>
                <div>
                    <Button
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}

                    >
                        Sign Up
                    </Button>

                </div>
                <hr />
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <a href={"/"} className="home">Home</a>
                        <a href={"/About"} className="home">About Us</a>
                        <a href={"/Login"} className="home">Log In</a>
                        <a href={"/Signup"} className="home"> SignUp</a>
                    </div>
                </div>
                <hr />
                <div className="main-footer">
                    <p className="col-sm">
                        HallSpace &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>
                </card>
            </div>

        </div>
    )
}