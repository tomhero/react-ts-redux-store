export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  totalPrice: number
}


export type DisplayCartItem = Omit<CartItem, 'quantity' | 'totalPrice'>;
