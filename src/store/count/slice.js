import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  // The value of the name key can be anything, as long as it doesn't match the name of another slice
  // This name only shows up in the action history in the Redux dev tools
  // But we normally want this to match the name of the slice in the main store in src/store/index.js
  name: "count (this can be anything)",
  initialState: {
    // The names of these keys in initialState will be used in selector definitions
    countValue: 0
  },
  reducers: {
    // These are the actions you can dispatch in UI components
    // They will always have state and action parameters
    // The value of the state parameter is supplied by Redux
    increase: (state) => {
      state.countValue = state.countValue + 1;
    },
    decrease: (state) => {
        state.countValue = state.countValue - 1;
      },
    reset: (state) => {
        state.countValue = 0;
    },
    // The value of the action parameter is supplied by you when you dispatch in the UI, like this: dispatch(set(100))
    // It's ok to not use the action parameter if you don't need it
    // Always use action.payload to get the value out (100)
    set: (state, action) => {
        state.countValue = action.payload;
    }
  },
});

// These actions will be imported in UI components in src/components
// They will be dispatched with useDispatch like this: useDispatch(increase())
// Always follow this exact format: export const { actionsToExport } = countSlice.actions;
export const { increase, decrease, reset, set } = countSlice.actions;

// This slice reducer needs to be imported and used in the main store, in src/store/index.js
// Because its a default export, we can name it whatever we want when we import it
export default countSlice.reducer; 