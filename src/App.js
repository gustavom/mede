import React from 'react';
import GlobalStyle from './assets/styles/global';
import { Normalize } from 'styled-normalize';
import Logo from './assets/img/MEDE.svg';

function App(){
  return (
      <>
        <Normalize/>
        <GlobalStyle/>
        <Logo/>
        <h1>Hello!</h1>
      </>
    );
};

export default App;
