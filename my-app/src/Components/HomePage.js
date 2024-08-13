import React, { useState , useEffect }  from 'react'
import Navbar from "./navbar";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaBars, FaSignInAlt, FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import './sidebar.css';
import './HomePage.css';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
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

import person1 from 'C:/Projects/Advanced_App_Development/my-app/src/Images/person1.jpeg';
import person2 from 'C:/Projects/Advanced_App_Development/my-app/src/Images/person2.jpeg';
import desimage from 'C:/Projects/Advanced_App_Development/my-app/src/Images/des-image.png';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

import Sidebar from './Sidebar';
import Footer from './Footer';
import { Icon } from '@mui/material';
import SizeContext from 'antd/es/config-provider/SizeContext';
import Contact from './Contact';
import HallList from './HallListRef';

function HomePage(){
    
  const navigate = useNavigate();

  const options = [
    { value: "ahemedabad", label: "Ahmedabad" },
    { value: "bangalore", label: "Bangalore"},
    { value: "chennai", label: "Chennai" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" }
  ];
  
  
  const [city, setCity] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState(null);
  const [halls, setHalls] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const handleChange = (event) => {
      setCity(event.target.value);
  };

  const handleDateChange = (newDate) => {
      setDate(newDate);
  };

  // const [selectedValue, setSelectedValue] = useState("");
  //   const handleSelectChange = (event) => {
  //       setSelectedValue(event.target.value);
  //   };
  
  const handleClick = () => {
    if (selectedValue) {
      navigate(`/halls/${selectedValue}`);
    }
  };

  
    // const itemData = [
    //   {
    //     img: 'https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Bed',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1579625498716-f6b4502d8091?q=80&w=2985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Kitchen',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1549964336-96c968e00d5b?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Sink',
    //   },
    //   {
    //     img: 'https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Books',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1526568929-7cdd510e77fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    //     title: 'Chairs',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Candle',
    //   }
      
      
    // ];

    
      
    
      
    
    return(
        <div>

            {/* Header */}
            <div className='home-header'>
              <div className='header-title'>
                <img src={hallspace} className='web-logo'></img>
                <p className='header-title-text'>HallSpace</p>

              </div>
              <div className='header-right'>
                <nav className='nav'>
                    <ul className='nav-links'>
                        <li><a className='links'onClick={() => navigate('/')}>Home</a></li>
                        <li><a href="#description" className='links'>About Us</a></li>
                        <li><a href="#contact-us"className='links'>Contact Us</a></li>
                        
                        
                    </ul>
                </nav>
                <div>
                    <button onClick={() => navigate("/Roles")} className='hm-login-button'>Login</button>
                </div>
              </div>
            </div>

          

            {/* Search box */}
            <div>

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
                                            disabled={option.disabled}
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
              
            </div>
            
            


            {/* Description-1 */}
            {/* <div className='description-1'>
              <div>
                <h1>Online Booking for your Hall or Venue</h1>
              </div>
              <div>
                <p>Best online reservation system for Marriage halls, Meeting halls, clubhouses, community centres and all other bookable function rooms.						</p>
              </div>
              <div >
                <ul className='des1-list'>
                  <li>Flexible System for any Venue</li>
                  <li>Flexible System for any Venue</li>
                  <li>Flexible System for any Venue</li>
                </ul>
        
              </div>
            </div> */}


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
    )
}

export default HomePage;