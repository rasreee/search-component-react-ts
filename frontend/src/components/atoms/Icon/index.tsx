import React from 'react';

import { Container } from './styles';


interface IIcon {
  src: string
}

const Icon: React.FC<IIcon> = ({ src, ...props }) => {
  return (
    <Container>
      <img alt={src} src={src} {...props} />
    </Container>
  );
};

export default Icon;
