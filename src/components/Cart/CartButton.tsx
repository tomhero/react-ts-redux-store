import React from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

type CartButtonProps = unknown;

const CartButton = (_props: CartButtonProps) => {

  const dispatch = useAppDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
