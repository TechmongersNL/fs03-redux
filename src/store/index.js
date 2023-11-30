import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/slice";
import favoriteReducer from "./favorite/slice";

// THIS IS THE MAIN STORE FILE
// store = state + reducer 
// A reducer is something that knows how to take initial state and modify it into a new state- the gardener
// A slice is like a mini store, it's a helper that comes from Redux Toolkit
// Because slices are mini stores, they also have state + reducer
// You can find slices in the slice.js files in src/store
const store = configureStore({
  reducer: {
    // This key will be the official name of this slice of the main store, and will be used in UI selectors
    // Value of this key needs to match name of the reducer that was imported above
    count: countReducer,
    favorite: favoriteReducer
  },
});

// This store is exported to be provided to the rest of the app in src/index.js
export default store;