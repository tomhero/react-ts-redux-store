import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { ProductItemType } from './models/product';
import { uiActions } from './store/ui-slice';
import { firebaseURL } from './config/firebase';
import { ICartState } from './store/cart-slice';
import Notification from './components/UI/Notification';

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

let isIntializing = true;

function App() {
  const dispatch = useAppDispatch();
  const { cartIsVisible, notification } = useAppSelector((state) => state.ui);
  const cart = useAppSelector((state) => state.cart);

  const sendCartData = async (cart: ICartState) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!!',
    }));
    const response = await fetch(`${firebaseURL}/cart.json`, {
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      throw new Error('Sending cart failed');
    }

    const responseData = await response.json() as ICartState;
    console.log(responseData);

    dispatch(uiActions.showNotification({
      status: 'success',
      title: 'Success',
      message: 'Sent cart data successfully!!',
    }));
  };

  useEffect(() => {
    if (isIntializing) {
      isIntializing = false;
      return;
    }

    sendCartData(cart).catch((_err) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sent cart data failed!!',
      }));
    });
  }, [cart, dispatch])

  return (
    <>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    <Layout>
      {cartIsVisible && <Cart />}
      <Products products={DUMMY_PRODUCTS} />
    </Layout>
    </>
  );
}

export default App;
