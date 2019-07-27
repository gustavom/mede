import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/img/MEDE.svg';

export default function Header() {
  return (
    <Container>
      <Logo />
      <h1>Header</h1>
    </Container>
  );
}
