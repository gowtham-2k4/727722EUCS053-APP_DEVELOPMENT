import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCardOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import './payments.css';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


const Payments = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/userpage')
        
    };

    return (
      <div className='payments-wrapper'>
          
          <div>
                <div className='home-header'>
                    <div className='header-title'>
                        <img src={hallspace} className='web-logo'></img>
                        <p className='header-title-text'>HallSpace</p>

                    </div>
                
                </div>
          </div>
          <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
                  backgroundColor: '#f0f0f0',
              }}
          >
              <Card sx={{ width: 400, padding: 4, backgroundColor: '#2d68d4' }}>
                  <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                      Payment Details
                  </Typography>
                  <CardContent>
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                  Person Name
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
                                  <PersonOutlineIcon sx={{ color: 'white', marginRight: 1 }} />
                                  <TextField
                                      fullWidth
                                      placeholder="Barry Allen"
                                      variant="standard"
                                      InputProps={{
                                          disableUnderline: true,
                                          sx: { color: 'black' },
                                      }}
                                  />
                              </Box>
                          </Grid>

                          <Grid item xs={12}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                  Card Number
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
                                  <CreditCardIcon sx={{ color: 'white', marginRight: 1 }} />
                                  <TextField
                                      fullWidth
                                      placeholder="1234 5678 435678"
                                      variant="standard"
                                      InputProps={{
                                          disableUnderline: true,
                                          sx: { color: 'black' },
                                      }}
                                  />
                              </Box>
                          </Grid>

                          <Grid item xs={6}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                  Expiry
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
                                  <CalendarTodayOutlinedIcon sx={{ color: 'white', marginRight: 1 }} />
                                  <TextField
                                      fullWidth
                                      placeholder="MM/YYYY"
                                      variant="standard"
                                      InputProps={{
                                          disableUnderline: true,
                                          sx: { color: 'black' },
                                      }}
                                  />
                              </Box>
                          </Grid>

                          <Grid item xs={6}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                  CVV/CVC
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#e5e9ee', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
                                  <LockOutlinedIcon sx={{ color: 'white', marginRight: 1 }} />
                                  <TextField
                                      fullWidth
                                      placeholder="••••••••••"
                                      variant="standard"
                                      InputProps={{
                                          disableUnderline: true,
                                          sx: { color: 'black' },
                                      }}
                                  />
                              </Box>
                          </Grid>
                      </Grid>

                      <Button
                          variant="contained"
                          fullWidth
                          sx={{
                              marginTop: 3,
                              padding: '12px 0',
                              background: 'linear-gradient(to right, #38B2AC, #4299E1)',
                              fontWeight: 'bold',
                              fontSize: '16px',
                              color: 'white',
                          }}
                          onClick={handleClickOpen}
                      >
                          Pay
                      </Button>
                  </CardContent>
              </Card>

              {/* Dialog for Payment Success */}
              <Dialog open={open} onClose={handleClose}>
                  <DialogTitle sx={{ textAlign: 'center' }}>
                      Payment Successful
                  </DialogTitle>
                  <DialogContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                          <CheckCircleIcon sx={{ fontSize: 60, color: 'green' }} />
                      </Box>
                      <DialogContentText sx={{ textAlign: 'center' }}>
                          Your payment has been successfully processed.
                      </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose} sx={{ margin: '0 auto', display: 'block' }}>
                          OK
                      </Button>
                  </DialogActions>
              </Dialog>
          </Box>
      </div>
    );
};

export default Payments;