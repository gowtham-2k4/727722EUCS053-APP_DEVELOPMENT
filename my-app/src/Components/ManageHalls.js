import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ManageHall.css';

// Utility function to generate random image URL
const getRandomImageUrl = () => {
  const images = [
    'https://image.shutterstock.com/image-photo/beautiful-decorated-indian-wedding-hall-260nw-2038499025.jpg',
    'https://image.shutterstock.com/image-photo/interior-decorated-indian-wedding-hall-260nw-2038499035.jpg',
    'https://image.shutterstock.com/image-photo/decorated-hall-indian-wedding-260nw-2038499027.jpg',
    // Add more URLs from the given website
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const ManageHall = () => {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);

  const handleSave = (hall) => {
    if (selectedHall) {
      setHalls(halls.map((h) => (h.id === hall.id ? hall : h)));
      setSelectedHall(null);
    } else {
      hall.id = Date.now();
      hall.image = getRandomImageUrl();
      setHalls([...halls, hall]);
    }
  };

  const handleEdit = (hall) => {
    setSelectedHall(hall);
  };

  const handleDelete = (id) => {
    setHalls(halls.filter((hall) => hall.id !== id));
  };

  const handleCancel = () => {
    setSelectedHall(null);
  };

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/managehall">Manage Halls</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>
        <div className="content">
          <h2>Manage Halls</h2>
          <HallForm selectedHall={selectedHall} onSave={handleSave} onCancel={handleCancel} />
          <div className="hall-list">
            {halls.map((hall) => (
              <div className="hall-card" key={hall.id}>
                <h3>{hall.name}</h3>
                <img src={hall.image} alt={hall.name} />
                <p>Location: {hall.location}</p>
                <p>Amenities: {hall.amenities}</p>
                <p>Rating: {hall.rating}</p>
                <p>Pricing: {hall.pricing}</p>
                <p>Accommodation: {hall.accommodation}</p>
                <div className="hall-actions">
                  <button onClick={() => handleEdit(hall)}>Edit</button>
                  <button onClick={() => handleDelete(hall.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HallForm = ({ selectedHall, onSave, onCancel }) => {
  const [hall, setHall] = useState({
    name: '',
    location: '',
    amenities: '',
    rating: '',
    pricing: '',
    accommodation: '',
  });

  useEffect(() => {
    if (selectedHall) {
      setHall(selectedHall);
    }
  }, [selectedHall]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHall({ ...hall, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(hall);
    setHall({ name: '', location: '', amenities: '', rating: '', pricing: '', accommodation: '' });
  };

  return (
    <div className="form-container">
      <h3>{selectedHall ? 'Edit Hall' : 'Add Hall'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={hall.name}
          onChange={handleChange}
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={hall.location}
          onChange={handleChange}
        />
        <input
          name="amenities"
          type="text"
          placeholder="Amenities"
          value={hall.amenities}
          onChange={handleChange}
        />
        <input
          name="rating"
          type="number"
          placeholder="Rating"
          value={hall.rating}
          onChange={handleChange}
        />
        <input
          name="pricing"
          type="text"
          placeholder="Pricing"
          value={hall.pricing}
          onChange={handleChange}
        />
        <input
          name="accommodation"
          type="number"
          placeholder="Accommodation"
          value={hall.accommodation}
          onChange={handleChange}
        />
        <div className="form-actions">
          <button type="submit">{selectedHall ? 'Update' : 'Add'}</button>
          {selectedHall && (
            <button type="button" onClick={onCancel}>Cancel</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ManageHall;
