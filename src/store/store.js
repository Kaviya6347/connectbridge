import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "../slice/userSlice"; // Importing the user reducer
import AsyncStorage from '@react-native-async-storage/async-storage'; // For local storage persistence
import { persistReducer, persistStore } from 'redux-persist'; // To persist Redux state across app restarts

// Configuration for Redux Persist
const persistConfig = {
    storage: AsyncStorage,  // Using AsyncStorage for React Native
    key: 'root',           // Key under which the state will be stored in AsyncStorage
};

// Combining reducers (useful if you plan to add more reducers later)
const rootReducer = combineReducers({
    reducer: userReducer,   // The user reducer handles authentication and user data
});

// Wrapping the root reducer with persistReducer to enable state persistence
export const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the Redux store with the persisted reducer
export const store = configureStore({
    reducer: persistedReducer, // Store now has persistence capabilities
});

// Creating a persistor object to manage the persistence process
export const persistor = persistStore(store);