import React, { Component } from 'react';

import { Container } from './styles';

import Speed from '../../components/Speed';
import Historic from '../../components/Historic';

import { FaCheck, FaUndo } from 'react-icons/fa';

export default class Panel extends Component {
  state = {
    download: 0,
    upload: 0,
    latency: 0,
    results: [],
    showSave: false,
    isSaving: false,
    isSaved: false,
    showRedo: false,
  };
  componentDidMount() {
    const resultsLocal = localStorage.getItem('results');

    if (resultsLocal) {
      this.setState({ results: JSON.parse(resultsLocal) });

      const resultLastPos = JSON.parse(resultsLocal).length - 1;

      this.setState({
        download: JSON.parse(resultsLocal)[resultLastPos].download,
        upload: JSON.parse(resultsLocal)[resultLastPos].upload,
        latency: JSON.parse(resultsLocal)[resultLastPos].latency,
        showRedo: true,
      });
      return this.props.navIsHome(false);
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

  myTimer = param => {
    // let timer =
    setTimeout(() => {
      console.log(param++);
      if (param < 20) {
        this.setState({
          download: Math.floor(Math.random() * (101 - 90) + 90),
          upload: Math.floor(Math.random() * (101 - 90) + 90),
          latency: Math.floor(Math.random() * (101 - 90) + 90),
        });
        this.myTimer(param);
      }
      if (param === 20) {
        this.setState({
          showSave: true,
          showRedo: false,
        });
      }
    }, 500);
  };

  runSpeedMeter = () => {
    let counter = 0;
    this.myTimer(counter);
  };

  redoTest = () => {
    this.setState({
      download: 0,
      upload: 0,
      latency: 0,
      isSaved: false,
    });
    this.runSpeedMeter();
  };

  saveSpeedMeter = () => {
    const { results } = this.state;
    const data = {
      download: this.state.download,
      upload: this.state.upload,
      latency: this.state.latency,
    };
    this.setState({
      isSaving: true,
      showSave: false,
    });
    this.setState({
      results: [...results, data],
    });
    setTimeout(() => {
      this.setState({
        isSaving: false,
        showSave: false,
        showRedo: true,
      });
    }, 900);
  };

  render() {
    return (
      <Container>
        <Speed
          download={this.state.download}
          upload={this.state.upload}
          latency={this.state.latency}
        />
        {/*show check saved*/}
        {this.state.isSaving ? (
          <div className="saving">
            <FaCheck viewBox="0 0 512 512" size="100" />
          </div>
        ) : (
          ''
        )}
        {this.state.showSave ? (
          <div className="save-button">
            <button onClick={() => this.redoTest()} className="success outline">
              <FaUndo />
            </button>
            <button onClick={() => this.saveSpeedMeter()} className="success">
              Salvar
            </button>
          </div>
        ) : (
          ''
        )}
        {this.state.showRedo ? (
          <div className="save-button">
            <button onClick={() => this.redoTest()} className="success outline">
              <FaUndo />
            </button>
          </div>
        ) : (
          ''
        )}
        <Historic />
      </Container>
    );
  }
}
