import { configureStore } from "@reduxjs/toolkit";

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        // booksCart: bookReducer, // Manages the state related to books in the cart
        // user: userReducer,      // Manages the state related to the user
        // orders: orderReducer,  // Manages the state related to orders
    }
});

export default store; // Export the configured store for use in the application
