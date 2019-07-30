import React, { Component } from 'react';

import { Container } from './styles';

import Speed from '../../components/Speed';

export default class Panel extends Component {
  state = {
    download: 0,
    upload: 0,
    latency: 0,
  };
  componentDidMount() {
    this.runDownload();
    return this.props.navIsHome(false);
  }
  runDownload = () => {
    // alert('teste');
    let counter = 0;
    const myTimer = () => {
      var timer = setTimeout(() => {
        console.log(counter++);
        if (counter < 100) {
          this.setState({
            download: counter++,
          });
          myTimer();
        }
      }, 100);
    };

    myTimer();
  };
  render() {
    return (
      <Container>
        <Speed
          download={this.state.download}
          upload={this.state.upload}
          latency={this.state.latency}
        />
      </Container>
    );
  }
}
