import React, { Component } from 'react';

import { Container } from './styles';

export default class Historic extends Component {
  render() {
    return (
      <Container>
        <h2 className="main-title">Seu histórico</h2>
        <ul>
          <li>
            <div className="item">
              <span className="title">Download</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Upload</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Latência</span>
              <span className="result">
                <span>99</span> Ms
              </span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="title">Download</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Upload</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Latência</span>
              <span className="result">
                <span>99</span> Ms
              </span>
            </div>
          </li>
          <li>
            <div className="item">
              <span className="title">Download</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Upload</span>
              <span className="result">
                <span>99</span> Mbps
              </span>
            </div>
            <div className="item">
              <span className="title">Latência</span>
              <span className="result">
                <span>99</span> Ms
              </span>
            </div>
          </li>
        </ul>
      </Container>
    );
  }
}
