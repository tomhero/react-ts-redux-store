import React from 'react';
import { useAppSelector } from '../../hooks/redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

type CartProps = unknown;

const Cart = (_props: CartProps) => {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
