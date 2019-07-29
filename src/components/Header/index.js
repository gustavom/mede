import React, { Component } from 'react';

import { Container } from './styles';
import Login from '../../components/Login';
import Logo from '../../assets/img/MEDE.svg';

class Header extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Login />
      </Container>
    );
  }
}

export default Header;
