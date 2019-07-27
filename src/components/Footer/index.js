import React from 'react';

import NicBr from '../../assets/img/logo-nicbr.png';

import { Container, Menu, Sign } from './styles';

export default function Footer() {
  return (
    <Container>
      <Menu>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </Menu>
      <Sign href="https://nic.br/" targef="_blank">
        <img src={NicBr} alt="nic.br" />
      </Sign>
    </Container>
  );
}
