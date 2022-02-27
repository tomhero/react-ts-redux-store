import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CartItemType } from '../../models/cart';
import { cartActions } from '../../store/cart-slice';

import classes from './CartItem.module.css';

type CartButtonProps = {
  item: CartItemType;
};


const CartItem = (props: CartButtonProps) => {
  const dispatch = useAppDispatch();

  const { id, name, quantity, totalPrice, price } = props.item;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price,
    }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
