import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { DisplayCartItemType } from '../../models/cart';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

type ProductItemProps = DisplayCartItemType & {
  description: string
};

const ProductItem = (props: ProductItemProps) => {
  const dispatch = useAppDispatch();

  const { id, name, price, description } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price,
    }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
