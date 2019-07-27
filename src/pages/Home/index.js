import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Hero, Spot, Button } from './styles';

import Logo from '../../assets/img/MEDE.svg';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Logo />
        <Spot>
          <h1>Vamos ver a velocidade da sua conexão de internet?</h1>
          <Button to="/panel">
            <span>Analisar</span>
          </Button>
        </Spot>
      </Hero>
    </Container>
  );
}
