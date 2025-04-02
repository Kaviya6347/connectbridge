import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  isLoggedIn: false, // Tracks if the user is logged in
  user: {
    name: 'Test User',        // Default user name
    email: 'test@gmail.com',  // Default user email
    mobile_number: 9876543210, // Default user mobile number
  },
};

// Creating a slice of the Redux store for user management
export const userSlice = createSlice({
  name: 'user',               // Name of the slice (used for debugging)
  initialState,               // Initial state defined above
  reducers: {
    // Action to set the user's login status
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload; // Updates login status (true/false)
    },
    // Action to update the user's information
    setUser: (state, action) => {
      state.user = action.payload; // Updates user data like name, email, etc.
    },
  },
});

// Exporting the actions so they can be dispatched in components
export const { setIsLoggedIn, setUser } = userSlice.actions;

// Exporting the reducer to be included in the Redux store
export default userSlice.reducer;
