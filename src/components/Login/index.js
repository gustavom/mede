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
    if (
      localStorage.getItem('user') !== null &&
      localStorage.getItem('user') !== ''
    ) {
      this.setState({
        isLogged: true,
        userName: localStorage.getItem('user'),
      });
    }
  }
  showModal = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  closeModalForm = e => {
    this.setState({
      isLogged: true,
      showModal: false,
      userName: localStorage.getItem('user'),
    });
  };

  logOut = e => {
    this.setState({
      isLogged: false,
      showModal: false,
      userName: localStorage.removeItem('user'),
    });
  };

  render() {
    return (
      <>
        {this.state.isLogged ? (
          <Container
            className={`is-logged ${this.props.homeClass || ''}`}
            onClick={() => this.showModal()}
          >
            <span>{this.state.userName}</span>
          </Container>
        ) : (
          <Container
            onClick={() => this.showModal()}
            className={`${this.props.homeClass || ''}`}
          >
            <span>login</span>
          </Container>
        )}

        {!this.state.showModal ? (
          ''
        ) : (
          <LoginModal
            logged={this.state.isLogged}
            closeModal={this.showModal}
            submitForm={this.closeModalForm}
            logoutUser={this.logOut}
          />
        )}
        {!this.state.showModal ? '' : <ModalGlobalStyle />}
      </>
    );
  }
}
