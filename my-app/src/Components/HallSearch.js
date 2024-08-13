import React, { useState } from 'react';
import { TextField, Button, Container, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const HallSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [halls, setHalls] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/halls/search?name=${searchTerm}`);
            
            setHalls(response.data);
        } catch (error) {
            console.error('Error fetching halls:', error);
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" align="center">Search Halls by Name</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <TextField
                        label="Search Hall"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Box>
            </Box>
            {halls.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Search Results:</Typography>
                    <List>
                        {halls.map((hall) => (
                            <ListItem key={hall.hallId}>
                                <ListItemText primary={hall.hallname} secondary={`Price: ${hall.price}, Capacity: ${hall.capacity}`} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Container>
    );
};

export default HallSearch;
