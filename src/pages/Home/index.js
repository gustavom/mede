import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Hero, Spot, Button } from './styles';

import Logo from '../../assets/img/MEDE.svg';

import Login from '../../components/Login';

export default class Home extends Component {
  componentDidMount() {
    return this.props.navIsHome();
  }
  render() {
    return (
      <Container>
        <Login homeClass="login-home" />
        <Hero>
          <Logo />
          <Spot>
            <h1>Vamos ver a velocidade da sua conexão de internet?</h1>
            <Button to="/panel">
              <span>
                Analisar
                <FaArrowRight />
              </span>
            </Button>
          </Spot>
        </Hero>
      </Container>
    );
  }
}
