import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../states/bookSlice'; // החלף בהתאם למיקום שלך

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    books: bookReducer, // Manages the state related to books
  },
});

export default store; // Export the configured store for use in the application
