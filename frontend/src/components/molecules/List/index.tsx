import React from 'react';

import { Container, Item } from './styles';

interface IList extends React.HTMLAttributes<HTMLOListElement> {
  children: any;
}

function List({ children, ...props }: IList) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};


List.Item = function ({ children }: { children: any }) {
  return <Item>{children}</Item>;
}

export default List;
