import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, border-style, #root{
    min-height: 100%;
  }

  body{
    background-color: #ffffff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
  }
`;
