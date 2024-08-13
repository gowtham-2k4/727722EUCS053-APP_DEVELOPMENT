import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import loginimage from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Login image.jpg';
import '@fontsource/poppins';

const RegisterForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmpwd, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
            allVariants: {
                color: '#000000',  // Set text color to black
            },
        },
    });


    const Handlesubmit = (event) => {
        event.preventDefault();
        const userdata = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };
        axios.post(`http://localhost:8080/api/users/register`, userdata)
            .then(res => {
                console.log(res.data);
                navigate('/login');
            })
            .catch(error => {
                console.log("Something went wrong " + error);
            });
    };

    const checkPassword = () => {
        if (password.length !== 0) {
            if (password === cnfrmpwd) {
                setMessage("Passwords match");
            } else {
                setMessage("Passwords don't match");
            }
        }
    };

    return (
        <div className='register-outer'>

            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div>

                    <div className='home-header'>
                    <div className='header-title'>
                        <img src={hallspace} className='web-logo'></img>
                        <p className='header-title-text'>HallSpace</p>

                    </div>
                    
                    </div> 
                    <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginTop: 4,
                                    padding: 5,
                                    borderRadius: 5,
                                    boxShadow: 5,
                                    backgroundColor: 'white'
                                }}
                            >
                                

                                {/* <Paper elevation={3} sx={{ padding: 3, width: '100%' }}> */}
                                    <Typography variant="h5" component="h1" align="center" gutterBottom>
                                        Sign Up
                                    </Typography>
                                    <form onSubmit={Handlesubmit}>
                                        <TextField
                                            label="Firstname"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            autoFocus
                                        />
                                        <TextField
                                            label="Lastname"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                        />
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyUp={checkPassword}
                                        />
                                        <TextField
                                            label="Confirm Password"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            type="password"
                                            id="cnfrm-pwd"
                                            value={cnfrmpwd}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            onKeyUp={checkPassword}
                                        />
                                        <Typography variant="body2" color={password === cnfrmpwd ? 'success.main' : 'error.main'}>
                                            {message}
                                        </Typography>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            disabled={password !== cnfrmpwd || !password || !cnfrmpwd}
                                            sx={{ mt: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                    </form>
                                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                        Already have an Account?{' '}
                                        <Button color="primary" onClick={() => navigate("/login")}>
                                            Login
                                        </Button>
                                    </Typography>
                                {/* </Paper> */}
                            </Box>
                        </Container>

                        
                
                </div>
            </ThemeProvider>
        </div>
    );
}

export default RegisterForm;
