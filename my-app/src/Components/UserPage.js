import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, Button, IconButton, Avatar, Menu } from '@mui/material';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import './userpage.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import managebookings from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Manage-Bookings-Icon-.png';
import alwaysworking from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Always-Working-Icon.png';
import managecustomers from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Manage-Customers-Icon.png';
import multiuser from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Multi-User-Icon.png';
import freeupgrade from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Free-Upgrades-Icon.png';
import gdpr from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/GDPR-Icon.png';
import issueinvoice from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Issue-Invoices.png';
import livecalendar from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/live-calender.png';
import promoteevents from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Promote-Events-Icon.png';
import regularbackups from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Regular-Backups-Icon.png';
import runreports from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Run-Reports-Icon.png';
import techsupport from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/Tech-Support-Icon.png';
import Contact from './Contact';
import person1 from 'C:/Projects/Advanced_App_Development/my-app/src/Images/person1.jpeg';
import person2 from 'C:/Projects/Advanced_App_Development/my-app/src/Images/person2.jpeg';
import desimage from 'C:/Projects/Advanced_App_Development/my-app/src/Images/des-image.png';
import { AccountCircle } from '@mui/icons-material';

const UserPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState(null);

  const options = [
    { value: "ahemedabad", label: "Ahmedabad" },
    { value: "bangalore", label: "Bangalore"},
    { value: "chennai", label: "Chennai" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" }
  ];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate('/profile');
  };

  const handleSignOut = () => {
    handleMenuClose();
    navigate('/');
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleClick = () => {
    // Handle search click
  };

  return (
    <div>
      <div className='home-header'>
        <div className='header-title'>
          <img src={hallspace} className='web-logo' alt='HallSpace Logo'></img>
          <p className='header-title-text'>HallSpace</p>
        </div>
        <div className='header-right'>
          <nav className='nav'>
            <ul className='nav-links'>
              <li><a className='links' onClick={() => navigate('/userpage')}>Home</a></li>
              <li><a href="#description" className='links'>About Us</a></li>
              <li><a href="#contact-us" className='links'>Contact Us</a></li>
            </ul>
          </nav>
          <div className='profile-icon-container'>
            <IconButton onClick={handleMenuOpen}>
              <AccountCircle fontSize='large' alt="User Profile" sx={{ color: 'white' }}/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleProfile}>My Profile</MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <div className='outer-search'>
        <div className='search-wrapper'>
          <div className='search-text'>
            <p>FIND A HALL IN INDIA</p>
            <p>_________________</p>
          </div>
          <div className='main-search'>
            <div className='city-select'>
              <FormControl style={{ width: 200 }} variant="outlined" margin="normal">
                <InputLabel id="city-select-label">City</InputLabel>
                <Select
                  labelId="city-select-label"
                  id="city-select"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  label="Select City"
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </div>
            <div>
              <Button variant="contained" color="error" onClick={handleClick}>Search</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Description-2 */}
      <div id="description" className='description'>
              
              <div className='wrapper-description-text'>
                <div className='description-text'>
                  <h1>
                    The booking system built for your venue.Secure,flexible and most importantly user freindly!
                  </h1><br></br>
                  <div>
                    <p>Welcome to HallSpace, your premier destination for securing versatile event spaces tailored to your needs. Whether you're planning a wedding, corporate event, birthday party, or any special occasion, our platform provides a diverse range of stunning venues to suit every event. With our user-friendly interface, you can easily browse through available halls, check their amenities, and view transparent pricing details. Our goal is to make the booking process as seamless and hassle-free as possible.</p>

                  </div>
                </div>
              </div>
              <div className='description-image'>
                <img src={desimage}></img>
                  {/* <ImageList sx={{ width: 500, height: 500 }} variant="woven" cols={3} gap={8}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=161&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                </ImageList> */}
              </div>
            </div>


            {/* Features */}
            <div id="benifits" className='benifits'>

              <div className="benifits-title">
                  
                  <h1>The Benifits of using HallSpace</h1>
                  <p>Hallmaster is more than booking software – it’s a whole booking system. The benefits of using Hallmaster extend beyond keeping track of events and venues. It can help with the daily running of your venues. Here’s a quick look at just some of what Hallmaster is capable of.</p>
            
              </div>
              <div className="outer-benifits">
                      
                  <div className="feature-1">
                      <img className="features-logo"  alt="admin-logo" src={managebookings}></img>
                      <p className="benefits-text">Manage Bookings</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="user-logo" src={managecustomers}></img>
                      <p className="benefits-text">Manage Customers</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={multiuser}></img>
                      <p className="benefits-text">Multi User</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={alwaysworking}></img>
                      <p className="benefits-text">Always Working</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="admin-logo" src={livecalendar}></img>
                      <p className="benefits-text">Live Calendar</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="user-logo" src={techsupport}></img>
                      <p className="benefits-text">Tech Support</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={issueinvoice}></img>
                      <p className="benefits-text">Issue Invoices</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={runreports}></img>
                      <p className="benefits-text">Run Reports</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="admin-logo" src={promoteevents}></img>
                      <p className="benefits-text">Promote Events</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="user-logo" src={regularbackups}></img>
                      <p className="benefits-text">Regular Backups</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={freeupgrade}></img>
                      <p className="benefits-text">Free Upgrades</p>
                  </div>
                  <div className="feature-1">
                      <img className="features-logo"  alt="owner-logo" src={gdpr}></img>
                      <p className="benefits-text">Raise Complaints</p>
                  </div>
                      
              </div>
            </div>

            {/* Customer Stories */}
            <div className='customer-stories'>
              <div className='customer-heading'>
                  <h1>What customers say about HallSpace</h1>
              </div>
              <div className='customer-box'>

                <div className='wrapper-customer-text'>
                  <div className='customer-text'>
                    <div className='customer-title'>
                      <img className='customer-image' src={person1}></img>
                      <h2>
                        Oliver
                      </h2><br></br>

                    </div>
                    <div>
                      <p>Booking with HallSpace was a breeze! The website is user-friendly, and the selection of venues is impressive. I found the perfect hall for my event within minutes. The detailed descriptions and photos made it easy to decide. Highly recommend for anyone looking to book a venue quickly and efficiently.</p>

                    </div>
                    
                  </div>
                </div>
                <div className='wrapper-customer-text'>
                  <div className='customer-text'>
                    <div className='customer-title'>
                      <img className='customer-image' src={person2}></img>
                      <h2>
                        Emily
                      </h2><br></br>

                    </div>
                    <div>
                      <p>HallSpace exceeded my expectations. The booking process was straightforward, and customer service was exceptional. They helped me find a hall that suited my budget and needs perfectly. The event went smoothly thanks to their reliable service. Will definitely use them again!</p>

                    </div>
                    
                  </div>
                </div>
                {/* <div className='wrapper-customer-text'>
                  <div className='customer-text'>
                    <div className='customer-title'>
                      <img className='customer-image' src={person1}></img>
                      <h2>
                        Oliver
                      </h2><br></br>

                    </div>
                    <div>
                      <p>Booking with HallSpace was a breeze! The website is user-friendly, and the selection of venues is impressive. I found the perfect hall for my event within minutes. The detailed descriptions and photos made it easy to decide. Highly recommend for anyone looking to book a venue quickly and efficiently.</p>

                    </div>
                    
                  </div>
                </div>
                <div className='wrapper-customer-text'>
                  <div className='customer-text'>
                    <div className='customer-title'>
                      <img className='customer-image' src={person2}></img>
                      <h2>
                        Emily
                      </h2><br></br>

                    </div>
                    <div>
                      <p>HallSpace exceeded my expectations. The booking process was straightforward, and customer service was exceptional. They helped me find a hall that suited my budget and needs perfectly. The event went smoothly thanks to their reliable service. Will definitely use them again!</p>

                    </div>
                    
                  </div>
                </div> */}
              </div>
              
              
              
            </div>

            {/* Contact Us */}
            <div id="contact-us">
              <Contact/>
            </div>

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
  );
};

export default UserPage;
