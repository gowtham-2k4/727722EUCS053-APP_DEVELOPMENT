import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Halls = ({ halls }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Halls
      </Typography>
      <List>
        {halls.map((hall) => (
          <ListItem key={hall.id}>
            <ListItemText primary={hall.name} secondary={hall.location} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Halls;