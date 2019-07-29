import React, { Component } from 'react';

import { FaTimes } from 'react-icons/fa';

import { Container } from './styles';

export default class LoginModal extends Component {
  state = {
    user: '',
  };
  handleSubmit = async e => {
    this.setState({
      newRepo: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <div className="modal-inner">
          <FaTimes className="close" onClick={() => this.props.closeModal()} />
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
