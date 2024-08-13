import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './ProfileDropdown.css';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate('/profile');
  };

  const handleMyBookings = () => {
    handleMenuClose();
    navigate('/mybookings');
  };

  const handleSignOut = () => {
    handleMenuClose();
    // Add signout logic here
    navigate('/signout');
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'right top',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <div>
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleMyBookings}>My Bookings</MenuItem>
                  <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default ProfileDropdown;
