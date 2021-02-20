import React, { MouseEventHandler } from 'react';

import { Container } from './styles';

interface IButton {
  children: any;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ onClick, children, ...props }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick()
  }

  return (
    <Container {...props} onClick={handleClick}>{children}</Container>
  );
}


export default Button;
