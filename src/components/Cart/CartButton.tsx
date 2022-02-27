import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

type CartButtonProps = unknown;

const CartButton = (_props: CartButtonProps) => {

  const { totlalQuantity } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totlalQuantity}</span>
    </button>
  );
};

export default CartButton;
