import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const data = [
  {
    imgSrc: 'https://theweddinginc.com/wp-content/uploads/2020/05/m-weddings-and-conventions-marraige-hall-chennai.jpg',
    title: 'Blue Bay Resort',
    location: 'Vadavelli, Chennai',
    accommodation: '651-2000',
    rating: 4.3,
    price: '50000-150000',
    about: 'Features a beachfront location with stunning views and modern amenities.',
  },
  {
    imgSrc: 'https://theweddinginc.com/wp-content/uploads/2020/05/SVV-Kalyana-Mandapam-Chennai.jpg',
    title: 'SVV Marriage Hall',
    location: 'Ashok Nagar, Chennai',
    accommodation: '116-2000',
    rating: 3.7,
    price: '35000-80000',
    about: 'Elegant decor with spacious halls and ample parking facilities.',
  },
  {
    imgSrc: 'https://theweddinginc.com/wp-content/uploads/2020/05/Sri-Devi-Palace-Wedding-Hall-Chennai.jpg',
    title: 'Shree Party Hall',
    location: 'Kodambakkam, Chennai',
    accommodation: '560-2000',
    rating: 3.6,
    price: '25000-200000',
    about: 'Known for its excellent catering services and beautiful interiors.',
  },
  {
    imgSrc: 'https://theweddinginc.com/wp-content/uploads/2020/05/Chennai-convention-center-Marriage-hall.jpg',
    title: 'Asthika Samara Marriage Hall',
    location: 'Alwarpet, Chennai',
    accommodation: '1393-2000',
    rating: 3.8,
    price: '50000-1000000',
    about: 'Offers a central location with easy access to public transport.',
  },
  {
    imgSrc: 'https://theweddinginc.com/wp-content/uploads/2020/05/Dhanalakshmi-Mahal-in-Chennai.jpg',
    title: 'Chennai Convention Center',
    location: 'Injambakkam, Chennai',
    accommodation: '1595-2000',
    rating: 3.8,
    price: '50000-1000000',
    about: 'Large venue with multiple halls and state-of-the-art facilities.',
  },
];

const ComplexGrid = () => {
  const renderPapers = () => {
    return data.map((item, index) => (
      <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          sx={{
            p: 2,
            mt: 2, // Add margin top for spacing between papers
            mb: 2, // Add margin bottom for spacing between papers
            maxWidth: 600, // Adjusted to match the larger image size
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 300, height: 300 }}>
                <Img alt={item.title} src={item.imgSrc} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.rating}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.location}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <AccountBalanceIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.about}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <PeopleIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.accommodation}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <CurrencyRupeeIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      {renderPapers()}
    </Grid>
  );
};

export default ComplexGrid;