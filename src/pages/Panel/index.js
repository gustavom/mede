import React, { Component } from 'react';

import { Container } from './styles';

export default class Panel extends Component {
  componentDidMount() {
    return this.props.navIsHome(false);
  }
  render() {
    return (
      <Container>
        <h1>Panel</h1>
      </Container>
    );
  }
}
