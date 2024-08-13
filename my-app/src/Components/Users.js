import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Users = ({ users }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Users;