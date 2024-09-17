import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Container, Typography } from '@mui/material';

// קטגוריות מדוגמא
const categories = [
  'Children',
  'Youth',
  'Adult',
  'Psychology'
];

const FileUpdateBook = () => {
  const [bookDetails, setBookDetails] = useState({
    name: '',
    price: '',
    quantity: '',
    author: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תבוא הלוגיקה של שליחת הנתונים לשרת
    console.log('Book details updated:', bookDetails);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Update Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Book Name"
              name="name"
              variant="outlined"
              value={bookDetails.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              variant="outlined"
              type="number"
              inputProps={{ step: "0.01" }}
              value={bookDetails.price}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              variant="outlined"
              type="number"
              value={bookDetails.quantity}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Author"
              name="author"
              variant="outlined"
              value={bookDetails.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Category"
              name="category"
              variant="outlined"
              value={bookDetails.category}
              onChange={handleChange}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FileUpdateBook;
