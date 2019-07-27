import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './assets/styles/global';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import Footer from './components/Footer';

import Logo from './assets/img/MEDE.svg';



function App(){
  return (
      <>
        <BrowserRouter>
          <Header/>
          <Logo/>
          <Routes />
          <Footer />
          <Normalize/>
          <GlobalStyle/>
        </BrowserRouter>
      </>
    );
};

export default App;
