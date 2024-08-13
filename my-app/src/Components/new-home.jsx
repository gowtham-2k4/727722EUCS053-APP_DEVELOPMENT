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
import Footer from './Footer';
import Header from './Header';
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <header>
        <Header/>
      </header>
      <main>
        <Container sx={{ py: 10 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
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
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=is&k=20&c=1W6ELv02bnYZBNRTxSQSBoefW14roJ_CZ3r2XYkXvtQ="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                   New Delhi, Delhi
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Delhi, the capital city, boasts an array of luxurious venue halls that cater to diverse events. These halls are known for their opulent interiors, spacious layouts, and sophisticated décor. Many venues offer customizable settings, professional event management services, and world-class catering, ensuring that every event, be it a wedding, corporate function, or social gathering, is a grand success.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    
                    image="https://media.istockphoto.com/id/457418861/photo/victoria-memorial-kolkata-india.jpg?s=612x612&w=is&k=20&c=K0SA7gP3jcUNjO1pcMEDsfVHTaFilA-R2cOwFn96BUc="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mamallapuram
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Kolkata, the cultural capital of India, offers a variety of venue halls that exude old-world charm and elegance. From historic mansions to contemporary banquet halls, these venues are equipped with the latest amenities. Kolkata’s venues are perfect for hosting traditional weddings, literary events, and corporate gatherings, with a touch of Bengali hospitality.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=612x612&w=is&k=20&c=A-2Y2HNDorK2i5XVmyYDP1x2YN866R23fH9UGQXCYJE="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Jaipur, Rajasthan
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Jaipur, the pink city, boasts some of the most majestic venue halls in India. Known for their royal architecture and opulent décor, these halls provide a regal setting for weddings and grand celebrations. Many venues in Jaipur feature intricate designs, expansive lawns, and luxurious amenities, making them perfect for memorable and lavish events.                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/1085810086/photo/imaambara.jpg?s=612x612&w=is&k=20&c=Kdxi-8MrPn8CNEj7RGEpp-37uZSoR3yb2I9hahmNRcw="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Lucknow, Uttar Pradesh
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Lucknow, the city of Nawabs, offers venue halls that blend historical grandeur with modern comforts. These venues are known for their elegant interiors, spacious layouts, and excellent service. Whether it’s a traditional wedding, a corporate event, or a cultural celebration, Lucknow’s halls provide a beautiful and sophisticated setting for any occasion.                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
        <div>
            <Footer/>
        </div>
    </ThemeProvider>
    
  );
}