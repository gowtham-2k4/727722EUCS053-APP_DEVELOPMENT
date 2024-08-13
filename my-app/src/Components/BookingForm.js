import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { AccountCircle, Event, People, Email, LocationOn, Star, AttachMoney, Home } from '@mui/icons-material';
import Header from './Header';
import { useNavigate, useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';

const OrderSummary = ({ hall }) => {
  if (!hall) {
    return <Typography variant="h5">No Hall Selected</Typography>;
  }

  return (
    <Card sx={{ mt: 4, padding: 2, fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}>
        Order Summary
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img
          src={hall.image || 'https://via.placeholder.com/200x150'}
          alt={hall.name}
          style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <HomeIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Hall Name:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Location:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.location}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <StarIcon sx={{ color: 'gold', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Rating:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.rating}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PeopleIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Accommodation:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.accommodation}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <AttachMoneyIcon sx={{ color: 'green', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Pricing:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.pricing}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

const BookingForm = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { hall } = location.state || {}; // Retrieve the hall data passed from Mumbai.jsx

  return (
    <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 , position: 'relative', zIndex: 2 , padding: 5}}>
        
            <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
                Booking Form
              </Typography>
              <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
                Experience something new every moment
              </Typography>
            </Box>
            <Card sx={{ mt: 4 }}>
              <CardContent>
                <Box component="form">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="First Name" 
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Last Name" 
                        variant="outlined" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        required 
                        fullWidth 
                        label="E-mail" 
                        variant="outlined" 
                        type="email" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        required 
                        fullWidth 
                        label="Number of Guests" 
                        variant="outlined" 
                        type="number" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <People />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Select 
                        fullWidth 
                        displayEmpty 
                        defaultValue=""
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      >
                        <MenuItem value="" disabled>
                          Please Select an Event
                        </MenuItem>
                        <MenuItem value="Birthday Party">🎉 Birthday Party</MenuItem>
                        <MenuItem value="Wedding">💍 Wedding</MenuItem>
                        <MenuItem value="Conference">📊 Conference</MenuItem>
                        <MenuItem value="Reception">🎶 Reception</MenuItem>
                        <MenuItem value="Corporate Event">🏢 Corporate Event</MenuItem>
                        <MenuItem value="Parties">🎈 Party</MenuItem>
                        <MenuItem value="Reunions">🎓 Reunion</MenuItem>
                        <MenuItem value="Concerts">🎸 Concert</MenuItem>
                        <MenuItem value="Fundraisers">💸 Fundraiser</MenuItem>
                        <MenuItem value="Galas and Proms">🎉 Gala and Prom</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Arrival Date"
                        type="date"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Event />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Arrival Time"
                        type="time"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Event />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Departure Date"
                        type="date"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Event />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Departure Time"
                        type="time"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Event />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Additional Information"
                        variant="outlined"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Button variant="contained" color="primary" size="large" onClick={() => navigate('/payments')}>
                        Submit Booking
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        
      </Container>
      <div>
            {/* Footer */}
            <footer>
              <div class="footer-content">
                  <h3>HallSpace</h3>
                  <p>Your one-stop solution for booking halls for events, meetings, and more.</p>
                  <ul class="socials">
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2024 HallSpace. Designed by Team8</p>
              </div>
            </footer>
            
      </div>
    </div>
  );
};

export default BookingForm;
