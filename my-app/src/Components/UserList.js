import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/getUser'); // Replace with your API endpoint
      const data = Array.isArray(response.data) ? response.data : []; // Ensure it's an array
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`); // Replace with your delete API endpoint
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ width: '70%', margin: 'auto' , padding: '10px'}}>
      <Typography variant="h6" component="div" sx={{ padding: '16px' }}>
        User Management
      </Typography>
      <Table sx={{ minWidth: 550 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: '8px' }}>ID</TableCell>
            <TableCell sx={{ padding: '8px' }}>Name</TableCell>
            <TableCell sx={{ padding: '8px' }}>Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell sx={{ padding: '8px' }}>{user.id}</TableCell>
              <TableCell sx={{ padding: '8px' }}>{user.firstName}</TableCell>
              <TableCell sx={{ padding: '8px' }}>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
