import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../states/bookSlice'; // החלף בהתאם למיקום שלך

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
