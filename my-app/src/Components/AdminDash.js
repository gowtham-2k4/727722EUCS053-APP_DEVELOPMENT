import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Card, CardContent, CardActions, CardMedia, Grid, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

const AddHall = () => {
    const [halls, setHalls] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentHall, setCurrentHall] = useState({ hallname: '', price: '', capacity: '', city: '', address: '', description: '', rating: '', image: '' });
    const [isEditMode, setIsEditMode] = useState(false);
    const [hallCount, setHallCount] = useState(0);

    useEffect(() => {
        fetchHalls();
        fetchHallCount();
    }, []);

    const fetchHalls = () => {
        axios.get('http://localhost:8080/halls/gethalls')
            .then(response => {
                setHalls(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the halls!", error);
            });
    };

    const fetchHallCount = () => {
        axios.get('http://localhost:8080/halls/count')
            .then(response => {
                setHallCount(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the hall count!", error);
            });
    };

    const handleAddNewHall = () => {
        setCurrentHall({ hallname: '', price: '', capacity: '', city: '', address: '', description: '', rating: '', image: '' });
        setIsEditMode(false);
        setOpenDialog(true);
    };

    const handleEditHall = (hall) => {
        setCurrentHall(hall);
        setIsEditMode(true);
        setOpenDialog(true);
    };

    const handleDeleteHall = (hallId) => {
        axios.delete(`http://localhost:8080/halls/${hallId}`)
            .then(() => {
                fetchHalls();
                fetchHallCount(); // Update the hall count
            })
            .catch(error => {
                console.error("There was an error deleting the hall!", error);
            });
    };

    const handleSaveHall = () => {
        if (isEditMode) {
            axios.put(`http://localhost:8080/halls/updatehall/${currentHall.hallId}`, currentHall)
                .then(() => {
                    fetchHalls();
                    fetchHallCount(); // Update the hall count
                    setOpenDialog(false);
                })
                .catch(error => {
                    console.error("There was an error updating the hall!", error);
                });
        } else {
            axios.post('http://localhost:8080/halls/addhall', currentHall)
                .then(() => {
                    fetchHalls();
                    fetchHallCount(); // Update the hall count
                    setOpenDialog(false);
                })
                .catch(error => {
                    console.error("There was an error adding the hall!", error);
                });
        }
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentHall({ ...currentHall, [name]: value });
    };

    return (
      <div>
        
          <Container component={paper}>
              <Typography variant="h4" gutterBottom>Add Halls</Typography>
              <Typography variant="h6" gutterBottom>Total Halls: {hallCount}</Typography>
              <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddNewHall} style={{ marginBottom: '20px' }}>
                  Add New Hall
              </Button>
              <Grid container spacing={3} padding={4}>
                  {halls.map(hall => (
                      <Grid item xs={12} sm={6} md={4} key={hall.hallId}>
                          <Card sx={{ boxShadow: 3 }}>
                              <CardMedia
                                  component="img"
                                  height="140"
                                  image={hall.image || "https://i.pinimg.com/736x/b4/c5/80/b4c5806daa3794192c03f523e54f51ed.jpg"}
                                  alt={hall.hallname}
                                  style={{ height: '214px', width: '380px', objectFit: 'cover' }}
                              />
                              <CardContent>
                                  <Typography variant="h4">{hall.hallname}</Typography>
                                  <Typography variant="h6">{hall.hallname}</Typography>
                                  <Typography>Hall ID: {hall.hallId}</Typography>
                                  <Typography>Price: ₹{hall.price}</Typography>
                                  <Typography>Capacity: {hall.capacity} people</Typography>
                                  <Typography>City: {hall.city}</Typography>
                                  <Typography>Address: {hall.address}</Typography>
                                  <Typography>Description: {hall.description}</Typography>
                                  <Typography>Rating: {hall.rating} / 5</Typography>
                              </CardContent>
                              <CardActions>
                                  <IconButton color="primary" onClick={() => handleEditHall(hall)}>
                                      <Edit />
                                  </IconButton>
                                  <IconButton color="secondary" onClick={() => handleDeleteHall(hall.hallId)}>
                                      <Delete />
                                  </IconButton>
                              </CardActions>
                          </Card>
                      </Grid>
                  ))}
              </Grid>

              <Dialog open={openDialog} onClose={handleDialogClose}>
                  <DialogTitle>{isEditMode ? 'Edit Hall' : 'Add New Hall'}</DialogTitle>
                  <DialogContent>
                      <DialogContentText>
                          {isEditMode ? 'Update the details of the hall.' : 'Enter the details of the new hall.'}
                      </DialogContentText>
                      <TextField margin="dense" name="hallname" label="Hall Name" fullWidth value={currentHall.hallname} onChange={handleChange} />
                      <TextField margin="dense" name="price" label="Price" fullWidth value={currentHall.price} onChange={handleChange} />
                      <TextField margin="dense" name="capacity" label="Capacity" fullWidth value={currentHall.capacity} onChange={handleChange} />
                      <TextField margin="dense" name="city" label="City" fullWidth value={currentHall.city} onChange={handleChange} />
                      <TextField margin="dense" name="address" label="Address" fullWidth value={currentHall.address} onChange={handleChange} />
                      <TextField margin="dense" name="description" label="Description" fullWidth value={currentHall.description} onChange={handleChange} />
                      <TextField margin="dense" name="rating" label="Rating" fullWidth value={currentHall.rating} onChange={handleChange} />
                      <TextField margin="dense" name="image" label="Image URL" fullWidth value={currentHall.image} onChange={handleChange} />
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleDialogClose} color="primary">Cancel</Button>
                      <Button onClick={handleSaveHall} color="primary">{isEditMode ? 'Update' : 'Add'}</Button>
                  </DialogActions>
              </Dialog>
          </Container>
      </div>
    );
};

export default AddHall;
