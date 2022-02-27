import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, DisplayCartItem } from '../models/cart';

// Define a type for the slice state
interface CartState {
  items: CartItem[]
  totlalQuantity: number
}


// Define the initial state using that type
const initialState: CartState = {
  items: [],
  totlalQuantity: 0,
}

 const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<DisplayCartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({...newItem, quantity: 1, totalPrice: newItem.price});
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
