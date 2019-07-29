import React, { Component } from 'react';

import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onLogin()}>
        <span>login</span>
      </Container>
    );
  }
}
