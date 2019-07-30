import React, { Component } from 'react';

import { Container } from './styles';

export default class Speed extends Component {
  render() {
    return (
      <Container>
        <div className="speed-main">
          <span className="title">Sua velocidade atual:</span>
          <span className="numbers">{this.props.download}</span> Mbps
        </div>
        <div className="speed-item">
          <span className="title">Upload</span>
          <span className="numbers">{this.props.upload}</span> Mbps
        </div>
        <div className="speed-item">
          <span className="title">Latência</span>
          <span className="numbers">{this.props.latency}</span> Mbps
        </div>
      </Container>
    );
  }
}
