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
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/24688383/1714059100_image6630.jpg?crop=0,0,1600,900',
    title: 'Twenty Four Hotel',
    location: 'Sarjapur Road, Bangalore',
    accommodation: '50-250',
    rating: 4.3,
    price: '8000-25000',
    about: ' It is an exemplary wedding destination that has elegant and luxurious banqueting and lawn facilities.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/4216/3_2/960/png/screen-shot-2018-03-14-at-10-40-02-am_15_84216.webp',
    title: 'Signature Club Resort',
    location: 'Yelahanka - Kempegowda International Airport, Bangalore',
    accommodation: '200-800',
    rating: 4.7,
    price: '35000-80000',
    about: 'Signature Club Resort, redefining celebrations In Bangalore, when you are looking for a venue space that will satisfy your longing to have a lavish wedding but on a budget.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/6934/3_2/960/jpg/13249934811324965600-21.webp',
    title: 'White Feather, Bangalore',
    location: 'Electronic City, Bangalore',
    accommodation: '250-3500',
    rating: 4.6,
    price: '40000-150000',
    about: 'It comes with a team of service staff and a catering staff that will take care of all your individual needs for the big day and make sure that your event is stunning.',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/2830/3_2/960/jpg/wedding-venue-prestige-park-drive-club-wedding-decor-3_15_462830-171102117297965.webp',
    title: 'Club Prestige Park Drive',
    location: 'Yelahanka - Kempegowda International Airport, Bangalore',
    accommodation: '50-400',
    rating: 4.7,
    price: '12000-50000',
    about: 'Club Prestige Park Drive is a wedding banquet hall that epitomises luxury and sophistication, elevating your special moments to new heights. ',
  },
  {
    imgSrc: 'https://cdn0.weddingwire.in/vendor/7212/3_2/960/jpg/-mg-1748_15_47212-168577308896906.webp',
    title: 'Woodrose Club',
    location: 'Jayanagar - JP Nagar, Bangalore',
    accommodation: '50-500',
    rating: 4.9,
    price: '11000-60000',
    about: 'lub Woodrose Club is a popular wedding venue in Bangalore where you can host many of your wedding functions. Whether hosting an intimate haldi function, a fun sangeet ceremony, or hosting a grand wedding ceremony and reception.',
  },
];

const Banglore = () => {
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

export default Banglore;
