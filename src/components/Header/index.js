import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Login from '../../components/Login';
import Logo from '../../assets/img/MEDE.svg';

class Header extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Login />
      </Container>
    );
  }
}

export default Header;
