export type CartItemType = {
  id: string
  name: string
  price: number
  quantity: number
  totalPrice: number
}

export type DisplayCartItemType = Omit<CartItemType, 'quantity' | 'totalPrice'>;
