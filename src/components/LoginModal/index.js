import React, { Component } from 'react';

import { FaTimes } from 'react-icons/fa';

import { Container } from './styles';

export default class LoginModal extends Component {
  state = {
    user: '',
    userField: '',
  };

  componentDidUpdate(_, prevState) {
    const { user } = this.state;
    console.log(user);
    if (prevState.user !== this.state.user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.props.submitForm();
    }
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      userField: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user, userField } = this.state;

    console.log(`User atual ${userField}`);

    const userName = userField;
    console.log(`Const userName ${userName}`);

    this.setState({
      user: userName,
    });

    console.log(`Olha o user ${user}`);
    console.log(user);
  };

  render() {
    return (
      <Container>
        <div className="modal-inner">
          <FaTimes className="close" onClick={() => this.props.closeModal()} />
          {this.props.logged ? (
            <h3>Editar seu perfil</h3>
          ) : (
            <h3>Faça seu login</h3>
          )}
          <form onSubmit={this.handleSubmit}>
            {this.props.logged ? (
              <>
                <input
                  type="text"
                  id="login"
                  name="login"
                  placeholder={localStorage.getItem('user')}
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="success">
                  Editar
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  id="login"
                  name="login"
                  placeholder="Informe seu login"
                  onChange={this.handleInputChange}
                />
                <button type="submit" className="success">
                  Entrar
                </button>
              </>
            )}
          </form>
          {this.props.logged ? (
            <button className="danger" onClick={() => this.props.logoutUser()}>
              Sair
            </button>
          ) : (
            ''
          )}
        </div>
      </Container>
    );
  }
}
