// Import necessary functions from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the habit slice
const initialState = {
    habits: [
        { id: 1, name: "Water Intake", description: "Track daily water consumption to stay hydrated and maintain energy levels.", weekly: [] },
        { id: 2, name: "Daily Reading", description: "Read for at least 15 minutes each day to expand knowledge and boost mental clarity.", weekly: [] },
        { id: 3, name: "Sleep Tracking", description: "Log your sleep hours and quality to ensure restful nights and better health.", weekly: [] },
    ],
};

// Create a slice for the habit feature
const habitSlice = createSlice({
    name: 'habit', // Name of the slice
    initialState, // Initial state of the slice
    reducers: { // Reducers to handle state changes
        // Action to initialize habits with a payload
        initializeHabits(state, action) {
            state.habits = action.payload;
        },
        // Action to add a new habit to the state
        addHabit(state, action) {
            state.habits.push(action.payload);
        },
        // Action to remove a habit from the state by its id
        removeHabit(state, action) {
            state.habits = state.habits.filter(habit => habit.id !== action.payload);
        },
        // Action to set or update the weekly status of a habit
        setWeeklyStatus(state, action) {
            state.habits = state.habits.map((item) => {
                if (item.id === action.payload.id) { // Check if the habit matches the given id
                    const index = item.weekly.findIndex(i => i.date === action.payload.date); // Check if the date already exists
                    if (index >= 0) {
                        // Update the status if the date exists
                        item.weekly[index].status = action.payload.status;
                    } else {
                        // Add a new entry for the weekly status if the date does not exist
                        const week = {
                            date: action.payload.date,
                            status: action.payload.status
                        };
                        item.weekly.push(week);
                    }
                    return item; // Return the updated habit item
                }
                return item; // Return the item unchanged if it doesn't match
            });
        }
    }
});

// Export the reducer function
export const habitReducer = habitSlice.reducer;

// Export the action creators generated by createSlice
export const habitActions = habitSlice.actions;

// Selector to retrieve the habit state from the Redux store
export const habitSelector = (state) => state.habitReducer;
