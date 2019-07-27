import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Logo from '../../assets/img/MEDE.svg';

export default function Home() {
  return (
    <Container>
      <Logo />
      <h1>Home</h1>
    </Container>
  );
}
