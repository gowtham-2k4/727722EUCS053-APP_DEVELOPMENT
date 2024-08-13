import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Button,
  TextField,
  Switch,
  Typography,
  FormControlLabel,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProfilePage = () => {
  const [open, setOpen] = useState(true); // Assume the dialog is open by default
  const [nickname, setNickname] = useState('hoon702');
  const [darkTheme, setDarkTheme] = useState(false);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleDarkThemeToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Add save logic here
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        My profile
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Avatar
            sx={{ width: 60, height: 60, margin: 'auto' }}
          />
          <Button variant="text" color="primary" sx={{ marginTop: 1 }}>
            Upload
          </Button>
        </div>
        <TextField
          margin="normal"
          label="Nickname"
          fullWidth
          value={nickname}
          onChange={handleNicknameChange}
        />
        <TextField
          margin="normal"
          label="User ID"
          fullWidth
          value={nickname}
          disabled
        />
        <FormControlLabel
          control={<Switch checked={darkTheme} onChange={handleDarkThemeToggle} />}
          label="Dark theme"
          sx={{ marginTop: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfilePage;
