import React from 'react';

const CartContenxt = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
});

export default CartContenxt;
