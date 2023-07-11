import React from 'react'
import StyledCard from './Card.Styled';

const Card = ({children}) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card;
