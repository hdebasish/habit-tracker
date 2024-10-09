// Import necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the habit reducer from the reducers file
import { habitReducer } from "./reducers/habitReducer";

// Create and configure the Redux store
export const store = configureStore({
    reducer: {
        habitReducer // Register the habit reducer to handle the state related to habits
    }
});
