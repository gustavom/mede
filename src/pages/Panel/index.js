import React, { Component } from 'react';

import { Container } from './styles';

import Speed from '../../components/Speed';

export default class Panel extends Component {
  componentDidMount() {
    return this.props.navIsHome(false);
  }
  render() {
    return (
      <Container>
        <Speed />
      </Container>
    );
  }
}
