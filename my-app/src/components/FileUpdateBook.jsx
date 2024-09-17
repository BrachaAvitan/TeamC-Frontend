import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Typography } from '@mui/material';
import { fetchBookById, updateBook } from '../states/bookSlice'; // תיקון: הקובץ `bookSlice` לא נמצא במקום הנכון
import { useParams, useNavigate } from 'react-router-dom';

const FileUpdateBook = () => {
  const { id } = useParams();
    //const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.book);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (book) {
      setFormData({
        name: book.name,
        price: book.price,
        quantity: book.quantity,
        author: book.author,
        category: book.category,
      });
    }
  }, [book]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateBook({ id, bookDetails: formData }))
      .then(() => {
        alert('Book updated successfully');
        navigate('/');
      })
      .catch(() => {
        alert('Failed to update book');
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Update Book</Typography>
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
          Update Book
        </Button>
      </form>
    </Container>
  );
};

export default FileUpdateBook;
