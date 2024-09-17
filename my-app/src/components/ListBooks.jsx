import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ListBooks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>ListBooks</div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/update-book/1')} // החלף `1` עם מזהה הספר המתאים
      >
        Update Book
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => navigate('/create-book')}
      >
        Create Book
      </Button>
    </div>
  );
};

export default ListBooks;
