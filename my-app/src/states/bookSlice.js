import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../api/apiClient";

// Initial state for the books slice
const initialState = {
  books: [],
  book: null,
  status: 'idle',
  error: null,
};

// Thunks to handle API calls
/**
 * Fetches the list of all books.
 * @returns {Promise<Array>} A promise that resolves to the list of books.
 */
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await apiClient.get('/books');
  return response.data;
});

/**
 * Fetches a book by its ID.
 * @param {string} id - The ID of the book to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the book data.
 */
export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id) => {
  const response = await apiClient.get(`/books/${id}`);
  return response.data;
});

/**
 * Creates a new book.
 * @param {Object} bookDetails - The details of the book to create.
 * @returns {Promise<Object>} A promise that resolves to the created book.
 */
export const createBook = createAsyncThunk('books/createBook', async (bookDetails) => {
  const response = await apiClient.post('/books', bookDetails);
  return response.data;
});

/**
 * Updates an existing book.
 * @param {Object} payload - Contains the ID of the book and the updated details.
 * @param {string} payload.id - The ID of the book to update.
 * @param {Object} payload.bookDetails - The updated details of the book.
 * @returns {Promise<Object>} A promise that resolves to the updated book.
 */
export const updateBook = createAsyncThunk('books/updateBook', async ({ id, bookDetails }) => {
  const response = await apiClient.put(`/books/${id}`, bookDetails);
  return response.data;
});

/**
 * Deletes a book by its ID.
 * @param {string} id - The ID of the book to delete.
 * @returns {Promise<string>} A promise that resolves to the ID of the deleted book.
 */
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await apiClient.delete(`/books/${id}`);
  return id;
});

// Create a slice of the Redux store for managing books
const bookSlice = createSlice({
  name: 'books', // The name of the slice
  initialState, // The initial state of the slice
  reducers: {}, // No synchronous reducers are defined
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'; // Set status to loading when fetching books
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when books are fetched
        state.books = action.payload; // Save the fetched books
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed if fetching books fails
        state.error = action.error.message; // Save the error message
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.book = action.payload; // Save the fetched book by id
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload); // Add the newly created book to the list
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index >= 0) {
          state.books[index] = action.payload; // Update the book details
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload); // Remove the deleted book
      });
  },
});

// Selector for accessing the books from the state
export const selectBooks = (state) => state.books.books;
export const selectBook = (state) => state.books.book;

// Export the reducer to be included in the store
export default bookSlice.reducer;
