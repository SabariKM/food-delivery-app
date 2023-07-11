import React, { useContext } from 'react';
import CartItems, { ActionsDiv, ButtonAlt, ButtonOrder, TotalDiv } from './Cart.Styled';
import Modal from '../UI/Modal';
import CartContenxt from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartCtx = useContext(CartContenxt);

  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <CartItems>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <TotalDiv>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </TotalDiv>
      <ActionsDiv>
        <ButtonAlt onClick={props.onHideCart}>Close</ButtonAlt>
        {hasItems && <ButtonOrder>Order</ButtonOrder>}
      </ActionsDiv>
    </Modal>
  )
}

export default Cart;
