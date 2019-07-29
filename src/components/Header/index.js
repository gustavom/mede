import React from 'react';

import { Container } from './styles';
import Login from '../../components/Login';
import Logo from '../../assets/img/MEDE.svg';

function Header({ modal }) {
  return (
    <Container>
      <Logo />
      <Login onLogin={modal} />
    </Container>
  );
}

export default Header;
