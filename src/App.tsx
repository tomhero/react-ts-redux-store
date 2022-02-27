import React from 'react';
import { useAppSelector } from './hooks/redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { ProductItemType } from './models/product';

const DUMMY_PRODUCTS: ProductItemType[] = [
  {
    id: 'p1',
    price: 10,
    title: 'Book 1',
    discription: 'My Book 1'
  },
  {
    id: 'p2',
    price: 20,
    title: 'Book 2',
    discription: 'My Book 2'
  },
  {
    id: 'p3',
    price: 30,
    title: 'Book 3',
    discription: 'My Book 3'
  },
];

function App() {
  const { cartIsVisible } = useAppSelector((state) => state.ui);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products products={DUMMY_PRODUCTS} />
    </Layout>
  );
}

export default App;
