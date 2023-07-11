import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import StyledHeader, { MainImage } from './Header.Styled';
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </StyledHeader>
      <MainImage>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </MainImage>
    </Fragment>
  )
}

export default Header;
