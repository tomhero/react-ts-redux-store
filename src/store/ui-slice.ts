import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotficationType } from '../models/ui';

// Define a type for the slice state
export interface IUIState {
  cartIsVisible: boolean
  notification?: NotficationType
}


// Define the initial state using that type
const initialState: IUIState = {
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
    showNotification(state, action: PayloadAction<NotficationType>) {
      state.notification = action.payload;
    },
    clearNotification(state) {
      state.notification = undefined;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
