import React from 'react';
import { CartItemActions, CartItemAmount, CartItemList, CartItemPrice, CartItemSummary } from './CartItem.Styled';

const CartItem = (props) => {
  const price = `Rs. ${props.price.toFixed(2)}`;

  return (
    <CartItemList>
      <div>
        <h2>{props.name}</h2>
        <CartItemSummary>
          <CartItemPrice>{price}</CartItemPrice>
          <CartItemAmount>x {props.amount}</CartItemAmount>
        </CartItemSummary>
      </div>
      <CartItemActions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </CartItemActions>
    </CartItemList>
  );
};

export default CartItem;
