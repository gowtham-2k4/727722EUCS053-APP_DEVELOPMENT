import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const defaultTheme = createTheme();

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='home-header'>
              <div className='header-title'>
                <img src={hallspace} className='web-logo'></img>
                <p className='header-title-text'>HallSpace</p>

              </div>
              <div className='header-right'>
                <nav className='nav'>
                    <ul className='nav-links'>
                        <li><a className='links'onClick={() => navigate('/Home')}>Home</a></li>
                        <li><a className='links'>About Us</a></li>
                        <li><a className='links'>Contact Us</a></li>
                        
                    </ul>
                </nav>
                
              </div>
            </div>

        <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
            <Container sx={{ py: 10 }} maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.istockphoto.com/id/1390163309/photo/beautiful-gateway-of-india-near-taj-palace-hotel-on-the-mumbai-harbour-with-many-jetties-on.webp?s=612x612&w=is&k=20&c=H7iGFiKK7B9oYgS_YoyfHPYd5Idlqhs7FfApYAcdooA="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mumbai, Maharashtra
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Mumbai, the financial capital of India, features some of the most elegant and versatile venue halls. These venues range from chic, contemporary spaces to grand, heritage locations. Equipped with cutting-edge technology and offering panoramic views of the city or the Arabian Sea, Mumbai’s halls are ideal for high-profile events, glamorous weddings, and business conferences.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary" href="/mumbai">
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.istockphoto.com/id/92317684/photo/bangalore.jpg?s=612x612&w=is&k=20&c=GV6jbh7e7SuNWSsInG1PdrI9iHFk6Uau-CBIHt_CFIc="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bangalore, Karnataka
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Bangalore, known as the Silicon Valley of India, offers venue halls that blend modernity with tradition. The city's halls are renowned for their innovative designs, lush gardens, and top-notch facilities. With professional event planners and a focus on tech-savvy solutions, these venues are perfect for tech conferences, elegant weddings, and corporate meetings.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary" href='/bangalore'>
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=is&k=20&c=tFKiqAsjsy8A5uf772zMoyXnMbRLYMbU6zDxm6Otgak="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hyderabad, Telangana
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Hyderabad, the city of pearls, is home to some of the most exquisite venue halls in India. These venues often reflect the city’s regal past with grand architecture and lavish interiors. Modern amenities, excellent catering, and dedicated event management teams make Hyderabad’s halls ideal for hosting weddings, large-scale conferences, and cultural events.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary">
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.istockphoto.com/id/647770280/photo/the-lukshmi-vilas-palace-seen-on-a-bright-sunny-afternoon.jpg?s=612x612&w=is&k=20&c=5nk-CdbE8rDSoCqLainH2PX9egxVCQWzR6c0nogr_YY="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Ahmedabad, Gujarat
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Ahmedabad’s venue halls are known for their spaciousness, modern facilities, and excellent service. The city offers a mix of contemporary and traditional halls, catering to a wide range of events. With well-maintained gardens, advanced audio-visual systems, and exceptional catering, Ahmedabad is an ideal choice for weddings, business events, and social functions.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary" href='/ahmedabad'>
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.gettyimages.com/id/1194206060/photo/puratchi-thalaivar-dr-mgr-central-railway-station.jpg?s=612x612&w=0&k=20&c=oqzLssBs09Z2P8KCn2PAgFsIGcaOG06SxE4WFqEZK4k="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Chennai, Tamil Nadu
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Chennai, a bustling metropolis on the southeastern coast, is home to some of India's finest venue halls. Known for its rich cultural heritage, halls in Chennai often feature traditional architecture combined with modern amenities. From grand wedding venues to state-of-the-art conference centers, these spaces are equipped with advanced audio-visual systems, ample parking, and excellent catering services, making them perfect for both personal and professional events.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary" href='/chennai'>
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{ pt: '56.25%' }}
                    image="https://media.istockphoto.com/id/1165372281/photo/ancient-colonial-city-architecture-building-with-famous-yellow-taxi-on-city-road-crossing-at.jpg?s=2048x2048&w=is&k=20&c=s-yiZbrXwB_8owpxXlmj-g-RHbCAoCrWHSakUE8XdHw="
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Kolkata, West Bengal
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                        Kolkata, the cultural capital of India, offers a plethora of elegant and historic venue halls. The city’s venues are known for their colonial-era architecture, spacious lawns, and excellent hospitality. With modern facilities, professional event management, and a touch of traditional Bengali charm, these halls are ideal for weddings, cultural events, and corporate gatherings.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="large" color="primary">
                        Know more
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
            </Container>
        </main>
        
        </ThemeProvider>

        <footer>
              <div class="footer-content">
                  <h3>Hall Booking</h3>
                  <p>Your one-stop solution for booking halls for events, meetings, and more.</p>
                  <ul class="socials">
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2024 Hall Booking. Designed by Your Name</p>
              </div>
            </footer>
    </div>
  );
}