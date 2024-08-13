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
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const data = [
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/4568/3_2/960/jpg/weddingvenues-enchanted-celebration-eventspace-2_15_434568-167221250928222.webp',
    title: 'Enchanted Celebration',
    location: ' Andheri East, Mumbai',
    accommodation: '50-2000',
    rating: 4.4,
    price: '5000-50000',
    about: ' It is a superb selection for those seeking a venue that not only provides exceptional services but also caters to various budget considerations.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/8825/3_2/960/png/6_15_158825.webp',
    title: 'Amit Banquets, Andheri East',
    location: ' Andheri East, Mumbai',
    accommodation: '50-700',
    rating: 4.1,
    price: '3500-50000',
    about: 'Elegant decor with spacious halls and ample parking facilities.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/6578/3_2/960/jpg/venue-img-copy_15_6578-163515944374863.webp',
    title: 'GCC Hotel and Club',
    location: ' Mira Road, Mumbai',
    accommodation: '100-5000',
    rating: 4.2,
    price: '5000-180000',
    about: 'Known for its excellent catering services and beautiful interiors.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/7706/3_2/960/jpeg/whatsapp-image-2024-04-26-at-12-45-00-pm_15_467706-171436841575366.webp',
    title: 'Rose Petals Banquet',
    location: 'CBD-Belapur, Mumbai',
    accommodation: '200-500',
    rating: 4.9,
    price: '50000-135000',
    about: 'Rose Petals Banquet is an exquisite venue that offers an unparalleled setting for any special occasion. With its tasteful décor, impeccable service, and attention to detail.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/2676/3_2/960/jpg/banquet-halls-blue-sea-banquets-restaurant-2_15_422676-167826649257871.webp',
    title: 'Blue Sea Banquets',
    location: 'Worli - Parel, Mumbai',
    accommodation: '200-2000',
    rating: 3.8,
    price: '20000-1000000',
    about: 'It is the perfect place for all kinds of events and has the best quality facilities.',
  },
];

const Mumbai = () => {
  const navigate = useNavigate();
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
                  <Button variant="contained" color="primary" onClick={() => { navigate("/payments") }}>
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
    <div>
      <Header/>
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        {renderPapers()}
      </Grid>

    </div>
  );
};

export default Mumbai;
