import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './assets/styles/global';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    isHome: true,
  };

  changeIsHome = () => {
    alert(this.state.isHome);
    this.setState({ isHome: !this.state.isHome }, () => {
      alert(this.state.isHome);
    });
  };

  confirmHome = () => {
    alert(this.state.isHome);
    this.setState({ isHome: true }, () => {
      alert(this.state.isHome);
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          {!this.state.isHome ? <Header /> : ''}
          <Routes isHome={this.changeIsHome} confirmIndex={this.confirmHome} />
          <Footer />
          <Normalize />
          <GlobalStyle />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
