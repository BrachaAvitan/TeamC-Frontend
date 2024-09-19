import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/booksService'; // Update the path as needed

const ListBooks = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  // Sample data of books
  const booksData = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", price: 29.99, author: 'J.K. Rowling', genre: 'Children' },
    { id: 2, title: "Harry Potter and the Chamber of Secrets", price: 29.99, author: 'J.K. Rowling', genre: 'Children' },
    { id: 3, title: "Harry Potter and the Prisoner of Azkaban", price: 29.99, author: 'J.K. Rowling', genre: 'Children' },
    { id: 4, title: "The Lion, the Witch and the Wardrobe", price: 19.99, author: 'C.S. Lewis', genre: 'Children' },
    { id: 5, title: "Charlotte's Web", price: 14.99, author: 'E.B. White', genre: 'Children' },
    { id: 6, title: "Matilda", price: 15.99, author: 'Roald Dahl', genre: 'Children' },
    { id: 7, title: "Where the Red Fern Grows", price: 12.99, author: 'Wilson Rawls', genre: 'Children' },
    { id: 8, title: "The Very Hungry Caterpillar", price: 10.99, author: 'Eric Carle', genre: 'Children' },
    { id: 9, title: "Alice's Adventures in Wonderland", price: 11.99, author: 'Lewis Carroll', genre: 'Children' },
    { id: 10, title: "Pippi Longstocking", price: 13.99, author: 'Astrid Lindgren', genre: 'Children' },
    { id: 11, title: "The Giver", price: 17.99, author: 'Lois Lowry', genre: 'Young Adult' },
    { id: 12, title: "The Hunger Games", price: 18.99, author: 'Suzanne Collins', genre: 'Young Adult' },
    { id: 13, title: "Divergent", price: 16.99, author: 'Veronica Roth', genre: 'Young Adult' },
    { id: 14, title: "Twilight", price: 14.99, author: 'Stephenie Meyer', genre: 'Young Adult' },
    { id: 15, title: "The Maze Runner", price: 19.99, author: 'James Dashner', genre: 'Young Adult' },
    { id: 16, title: "Looking for Alaska", price: 15.99, author: 'John Green', genre: 'Young Adult' },
    { id: 17, title: "The Fault in Our Stars", price: 16.99, author: 'John Green', genre: 'Young Adult' },
    { id: 18, title: "Eleanor & Park", price: 17.99, author: 'Rainbow Rowell', genre: 'Young Adult' },
    { id: 19, title: "Speak", price: 12.99, author: 'Laurie Halse Anderson', genre: 'Young Adult' },
    { id: 20, title: "Paper Towns", price: 14.99, author: 'John Green', genre: 'Young Adult' },
  ];

  // Fetch the list of books on component mount
  useEffect(() => {
    // For now, using sample data
    setBooks(booksData);
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete book with ID: ${id}`);
      await deleteBook(id); // Use the book ID for deletion
      setBooks((prevBooks) => prevBooks.filter(book => book.id !== id)); // Update the list without the deleted book
      console.log(`Deleted book with ID ${id}`);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/create-book')}
      >
        Create Book
      </Button>
      
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.price.toFixed(2)}$</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => navigate(`/update-book/${book.id}`)}
                    style={{ marginRight: '10px' }}
                  >
                    Update
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListBooks;
