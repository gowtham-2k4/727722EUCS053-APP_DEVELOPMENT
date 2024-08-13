import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import '@fontsource/poppins';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
            allVariants: {
                color: '#000000',  // Set text color to black
            },
        },
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
            // Assuming successful login redirects to the home page
            localStorage.setItem('userEmail', email);
            navigate('/adminpage');  
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
       <div className='login-outer'>

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
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginTop: 15,
                                    padding: 3,
                                    borderRadius: 5,
                                    boxShadow: 5,
                                    backgroundColor:'white'
                                    
                                }}
                            >
                                {/* <img src={hallspace} alt="HallSpace Logo" style={{ width: '100px', height: 'auto' }} /> */}
                                <Typography variant="h5" component="h1" sx={{ mt: 2, mb: 2 }}>
                                    Admin Login
                                </Typography>
                                {/* <Paper  sx={{ padding: 3, width: '100%' }}> */}
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="Admin Email"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            autoComplete="email"
                                            autoFocus
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            error={!!error}
                                            helperText={error}
                                        />
                                        <TextField
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            error={!!error}
                                            helperText={error}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Login
                                        </Button>
                                    </form>
                                    
                                {/* </Paper> */}
                            </Box>
                        </Container>
                </div>
            </ThemeProvider>
       </div>
            

    );
};

export default AdminLogin;
