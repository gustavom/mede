import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeBg from '../../assets/img/home-bg.png';

export const Container = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* min-height: 580px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: url(${HomeBg}) center no-repeat;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 70px;
  button {
    width: 100%;
    margin: 0 10px;
    padding: 14px 10px;
    border-radius: 3px;
    background-color: #365df0;
    margin-bottom: 15px;
    border: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #2f55cc;
    }
    &:active {
      background-color: #244aa8;
    }
    &.success {
      background-color: #0dcb7d;
      &:hover {
        background-color: #10b26c;
      }
      &:active {
        background-color: #0e995d;
      }
      &.outline {
        background-color: transparent;
        box-shadow: inset 0 0 0 2px #0dcb7d;
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
    &.danger {
      background-color: #f95e5a;
      &:hover {
        background-color: #cc4c4c;
      }
      &:active {
        background-color: #a53f3f;
      }
    }
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(13, 112, 203);
    background: linear-gradient(
      130deg,
      rgba(13, 112, 203, 0.9) 0%,
      rgba(73, 48, 166, 0.9) 100%
    );
  }
  .save-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 90;
    width: 100%;
    flex: 0 0 100%;
    padding: 15px 0;
    animation: fade-in-bottom ease 0.4s forwards;
    button {
      max-width: 100px;
    }
  }

  @keyframes fade-in-bottom {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .saving {
    position: relative;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: center;
    svg {
      animation: fade-in-bottom ease 0.4s forwards;
      fill: #10b26c;
    }
  }
`;
