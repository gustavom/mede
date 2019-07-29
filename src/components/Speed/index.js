import React, { Component } from 'react';

import { Container } from './styles';

export default class Speed extends Component {
  render() {
    return (
      <Container>
        <div className="speed-main">
          <span className="title">Sua velocidade atual:</span>
          <span className="numbers">150</span> Mbps
        </div>
        <div className="speed-item">
          <span className="title">Upload</span>
          <span className="numbers">150</span> Mbps
        </div>
        <div className="speed-item">
          <span className="title">Latência</span>
          <span className="numbers">150</span> Mbps
        </div>
      </Container>
    );
  }
}
