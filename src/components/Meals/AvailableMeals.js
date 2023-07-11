import React from 'react';
import MealsSection from './AvailableMeals.Styled';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Gobi Manchurian',
    description: 'Indo Chinese Appetizer',
    price: 120,
  },
  {
    id: 'm2',
    name: 'Dhosai',
    description: 'South Indian Speciality!',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 140,
  },
  {
    id: 'm4',
    name: 'Chapati',
    description: 'Quintessence Of The Indian Cuisine',
    price: 20,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <MealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </MealsSection>
  )
}

export default AvailableMeals;
