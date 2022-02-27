import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, DisplayCartItemType } from '../models/cart';

// Define a type for the slice state
export interface ICartState {
  items: CartItemType[]
  totlalQuantity: number
  changed: boolean
}


// Define the initial state using that type
const initialState: ICartState = {
  items: [],
  totlalQuantity: 0,
  changed: false,
}

 const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<DisplayCartItemType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totlalQuantity++;
      if (!existingItem) {
        state.items.push({...newItem, quantity: 1, totalPrice: newItem.price});
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totlalQuantity--;
      state.changed = true;
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
