import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UIState {
  cartIsVisible: boolean
}


// Define the initial state using that type
const initialState: UIState = {
  cartIsVisible: false,
}

 const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      // This will capture cartIsVisible state then copy to new state automatically
      // (By redux tookit)
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
