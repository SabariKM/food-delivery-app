import React, { useContext } from 'react'
import MealList, { MealDescription, MealPrice } from './MealItem.Styled';
import MealItemForm from './MealItemForm';
import CartContenxt from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContenxt);
  const price = `Rs. ${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <MealList>
      <div>
        <h3>{props.name}</h3>
        <MealDescription>{props.description}</MealDescription>
        <MealPrice>{price}</MealPrice>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </MealList>
  )
}

export default MealItem;
