import React, { Component } from 'react';

import { Container } from './styles';

import LoginModal from '../LoginModal';

import ModalGlobalStyle from '../../assets/styles/Modalglobal';

export default class Login extends Component {
  state = {
    isLogged: false,
    showModal: false,
    userName: '',
  };
  componentDidMount() {
    if (localStorage.getItem('user') !== null) {
      this.setState({
        isLogged: true,
        userName: localStorage.getItem('user'),
      });
    }
  }
  showModal = e => {
    this.setState({ showModal: !this.state.showModal });
    alert(`Esta logado ${this.state.isLogged}`);
  };

  closeModalForm = e => {
    this.setState({
      isLogged: true,
      showModal: false,
      userName: localStorage.getItem('user'),
    });
    alert(`Esta logado ${this.state.isLogged}`);
  };

  render() {
    return (
      <>
        {this.state.isLogged ? (
          <Container className="is-logged">
            <span>{this.state.userName}</span>
          </Container>
        ) : (
          <Container onClick={() => this.showModal()}>
            <span>login</span>
          </Container>
        )}

        {!this.state.showModal ? (
          ''
        ) : (
          <LoginModal
            closeModal={this.showModal}
            submitForm={this.closeModalForm}
          />
        )}
        {!this.state.showModal ? '' : <ModalGlobalStyle />}
      </>
    );
  }
}
