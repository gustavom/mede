import React, { Component } from 'react';

import { Container } from './styles';

export default class Historic extends Component {
  render() {
    return (
      <Container>
        <h2 className="main-title">Seu histórico</h2>
        <ul>
          {this.props.resultList
            .map((item, index) => (
              <li key={index}>
                <div className="item">
                  <span className="title">Download</span>
                  <span className="result">
                    <span>{item.download}</span> Mbps
                  </span>
                </div>
                <div className="item">
                  <span className="title">Upload</span>
                  <span className="result">
                    <span>{item.upload}</span> Mbps
                  </span>
                </div>
                <div className="item">
                  <span className="title">Latência</span>
                  <span className="result">
                    <span>{item.latency}</span> Ms
                  </span>
                </div>
              </li>
            ))
            .reverse()}
        </ul>
      </Container>
    );
  }
}
