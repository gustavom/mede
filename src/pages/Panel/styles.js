import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeBg from '../../assets/img/home-bg.png';

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 580px;
  display: flex;
  align-items: center;
  background: url(${HomeBg}) center no-repeat;
  background-size: cover;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(13, 112, 203);
    background: linear-gradient(
      130deg,
      rgba(13, 112, 203, 0.9) 0%,
      rgba(73, 48, 166, 0.1) 100%
    );
  }
`;
