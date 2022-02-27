import React from 'react';
import { ProductItemType } from '../../models/product';
import ProductItem from './ProductItem';

import classes from './Products.module.css';

type ProductProps = {
  products: ProductItemType[]
};

const Products = (props: ProductProps) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            description={product.discription}
          />

        ))}
      </ul>
    </section>
  );
};

export default Products;
