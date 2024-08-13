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
    imgSrc: 'https://cdn0.weddingwire.in/vendor/8242/3_2/960/jpg/-jan2623_15_458242-170057506849347.webp',
    title: 'Noormahal Palace Hotel, Karnal',
    location: 'South Delhi',
    accommodation: '100-1000',
    rating: 4.3,
    price: '30000-80000',
    about: 'Noormahal Palace, nestled in the heart of serene landscapes of Karnal, it understands the importance of this day for couples .',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/3713/3_2/960/jpg/17499583-1225208910928089-2482976147089191634-n_15_33713.webp',
    title: 'Tivoli Grand Resort Hotel',
    location: 'Chattarpur - MG Road, South Delhi',
    accommodation: '250-1000',
    rating: 4.7,
    price: '35000-80000',
    about: 'Discover elegance and sophistication at The Upper HSE by Tivoli The Upper HSE by Tivoli is a beacon among wedding venues located in South Delhi.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/3601/3_2/960/jpg/27973067-1620286584674343-8779948725268117552-n_15_33601.webp',
    title: 'Yadu Greens',
    location: 'GT Karnal Road - Alipur, North Delhi',
    accommodation: '250-5000',
    rating: 4.6,
    price: '40000-150000',
    about: 'Multiple stunning wedding venues, exquisite decor, and a splendid ambience, this property provides.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/4209/3_2/960/jpg/-96a8821_15_14209-170868002399474.webp',
    title: 'Precious Moments Banquet',
    location: 'Janakpuri - Uttam Nagar, West Delhi',
    accommodation: '100-2000',
    rating: 3.8,
    price: '50000-1000000',
    about: 'Offers a central location with easy access to public transport.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/2822/3_2/960/jpg/file-1722167167806_15_472822-172216716959529.webp',
    title: 'The Queen Palace',
    location: 'Ghaziabad',
    accommodation: '100-800',
    rating: 4.9,
    price: '50000-150000',
    about: 'The Queen Palace, located in the heart of Noida, is an exquisite wedding lawn farmhouse that offers a perfect blend of elegance and comfort for your special day.',
  },
];

const Delhi = () => {
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

export default Delhi;
