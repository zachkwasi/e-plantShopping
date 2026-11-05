// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer from CartSlice
import cartReducer from './CartSlice';

// Create and configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

// Export the configured Redux store
export default store;