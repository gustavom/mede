import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './assets/styles/global';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <Normalize />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
