import React, { Component } from 'react';

import { Container } from './styles';

import Speed from '../../components/Speed';

export default class Panel extends Component {
  state = {
    download: 0,
    upload: 0,
    latency: 0,
    results: [],
    showSave: false,
  };
  componentDidMount() {
    const results = localStorage.getItem('results');

    if (results) {
      this.setState({ results: JSON.parse(results) });
    }
    this.runSpeedMeter();
    return this.props.navIsHome(false);
  }

  componentDidUpdate(_, prevState) {
    const { results } = this.state;
    if (prevState.results !== this.state.results) {
      localStorage.setItem('results', JSON.stringify(results));
    }
  }

  runSpeedMeter = () => {
    // alert('teste');
    let counter = 0;
    const myTimer = () => {
      let timer = setTimeout(() => {
        console.log(counter++);
        if (counter < 20) {
          this.setState({
            download: Math.floor(Math.random() * (101 - 90) + 90),
            upload: Math.floor(Math.random() * (101 - 90) + 90),
            latency: Math.floor(Math.random() * (101 - 90) + 90),
          });
          myTimer();
        }
        if (counter === 20) {
          this.setState({
            showSave: true,
          });
        }
      }, 500);
    };

    myTimer();
  };

  saveSpeedMeter = () => {
    const { results } = this.state;
    const data = {
      download: this.state.download,
      upload: this.state.upload,
      latency: this.state.latency,
    };
    this.setState({
      results: [...results, data],
    });
  };

  render() {
    return (
      <Container>
        <Speed
          download={this.state.download}
          upload={this.state.upload}
          latency={this.state.latency}
        />
        {this.state.showSave ? (
          <div className="save-button">
            <button
              onClick={() => this.runSpeedMeter()}
              className="success outline"
            >
              Refazer
            </button>
            <button onClick={() => this.saveSpeedMeter()} className="success">
              Salvar
            </button>
          </div>
        ) : (
          ''
        )}
      </Container>
    );
  }
}
