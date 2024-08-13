import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

const HallListRef = () => {
  const [halls, setHalls] = useState([]);
  const { city } = useParams();
  const[hallId,setHallId] = useState('');
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
    },
  });

  useEffect(() => {
    if (city) {
      axios.get(`http://localhost:8080/halls/location/${city}`)
        .then(response => {
          setHalls(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the halls!", error);
        });
    }
  }, [city]);

  // const handleBookNow = (hallId) => {
  //   navigate(`/bookingform/${hallId}`);
  // };
  const userEmail = localStorage.getItem('userEmail');
  const handleClick = (hallId) => {
    if (hallId) {
      navigate(`/bookingform/${hallId}/${{ state: { userEmail } }}`);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className='home-header'>
        <div className='header-title'>
          <img src={hallspace} className='web-logo' alt="HallSpace Logo" />
          <p className='header-title-text'>HallSpace</p>
        </div>
        <div className='header-right'>
          <nav className='nav'>
            <ul className='nav-links'>
              <li><a className='links' onClick={() => navigate('/')}>Home</a></li>
              <li><a href="#description" className='links'>About Us</a></li>
              <li><a href="#contact-us" className='links'>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
          <Box component="main" sx={{ width: '100%', maxWidth: 1200, p: 3 }}>
            <Typography variant="h3" gutterBottom align="center">
              Halls in {city}
            </Typography>
            <Grid container spacing={3}>
              {halls.map((hall) => (
                <Grid item xs={12} md={6} lg={4} key={hall.hallId}>
                  <Paper sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                    <Typography variant="h6" align="center">
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <AccountBalanceOutlinedIcon /> {hall.hallname}
                      </Box>
                    </Typography>
                    <img src={hall.image || 'https://via.placeholder.com/150'} alt={hall.hallname} style={{ width: '340px', height: '191px' }} />
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography> <Typography>{hall.city}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography> <Typography>{hall.description}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography> <Typography>{hall.rating}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography> <Typography>{hall.price}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography> <Typography>{hall.capacity}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                      <Button variant="contained" color="primary" onClick={() =>navigate("/bookingform")}>
                        Book Now
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default HallListRef;
