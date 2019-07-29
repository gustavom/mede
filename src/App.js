import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './assets/styles/global';
import ModalGlobalStyle from './assets/styles/Modalglobal';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

class App extends Component {
  state = {
    isHome: true,
    showModal: false,
  };

  changeIsHome = () => {
    this.setState({ isHome: !this.state.isHome });
  };

  confirmHome = () => {
    this.setState({ isHome: true });
  };

  showModal = e => {
    this.setState({ showModal: !this.state.showModal });
    console.log(this.state.showModal);
  };

  render() {
    return (
      <>
        <BrowserRouter>
          {!this.state.isHome ? <Header modal={this.showModal} /> : ''}
          <Routes isHome={this.changeIsHome} confirmIndex={this.confirmHome} />
          <Footer />
          {!this.state.showModal ? (
            ''
          ) : (
            <LoginModal closeModal={this.showModal} />
          )}
          <Normalize />
          <GlobalStyle />
          {!this.state.showModal ? '' : <ModalGlobalStyle />}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
