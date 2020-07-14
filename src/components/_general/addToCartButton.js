import React from 'react';
import { Button } from '../../style/style';

const AddToCart = (props) => {
  const { item, testid } = props;

  const addToCart = (itemParam) => {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const cartItems = JSON.parse(localStorage.cartItems);
    const updatecartItems = [...cartItems, itemParam];
    localStorage.cartItems = JSON.stringify(updatecartItems);
  };
  return (
    <Button cart data-testid={testid} type="button" onClick={() => addToCart(item)}>
      <i className="fas fa-cart-arrow-down fa-2x" style={{ color: '#3c096c' }} />
    </Button>
  );
};

export default AddToCart;
