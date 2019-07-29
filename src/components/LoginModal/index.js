import React, { Component } from 'react';

import { Container } from './styles';

export default class LoginModal extends Component {
  render() {
    return (
      <Container>
        <div className="modal-inner">
          <h3>Faça seu login</h3>
          <form id="modalForm">
            <input type="text" id="login" placeholder="Informe seu login" />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </Container>
    );
  }
}
