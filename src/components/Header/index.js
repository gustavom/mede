import React from 'react';

import { Container } from './styles';
import Login from '../../components/Login';
import Logo from '../../assets/img/MEDE.svg';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Login />
    </Container>
  );
}
