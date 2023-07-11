import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartButton, { Badge, Icon } from './HeaderCartButton.Styled';
import CartContenxt from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContenxt);
  const {items} = cartCtx;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  useEffect(() => {
    if(cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <CartButton onClick={props.onShowCart} btnHighlighted={btnIsHighlighted}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>
        {numberOfItems}
      </Badge>
    </CartButton>
  )
}

export default HeaderCartButton;
