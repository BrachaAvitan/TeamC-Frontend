import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // תיקון: ייבוא נכון
import { TextField, Button, Container, Typography } from '@mui/material';
import { createBook } from '../states/bookSlice'; // תיקון: הקובץ `bookSlice` לא נמצא במקום הנכון
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const FileCreateBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    author: '',
    category: '',
  });
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(formData))
      .then(() => {
        alert('Book created successfully');
        navigate('/');
      })
      .catch(() => {
        alert('Failed to create book');
      });
  };

  return ( <div>
    {isLoading ? (
      <Loader /> // Display the Loader component if isLoading is true
    ) : (
      <>
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Create New Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Create Book
        </Button>
      </form>
    </Container>          </>
            
          )}
        </div>
  );
};

export default FileCreateBook;
