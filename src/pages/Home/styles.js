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

export const Hero = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Spot = styled.div`
  padding-top: 80px;
  text-align: center;
  h1 {
    margin: 0;
    text-align: center;
    font-weight: 200;
    color: #fff;
    font-size: 45px;
    letter-spacing: -3px;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  border-radius: 100px;
  padding: 7px 50px;
  background: #0dcb7d;
  /* background: linear-gradient(
    180deg,
    rgba(13, 203, 125, 1) 0%,
    rgba(10, 163, 100, 1) 100%
  ); */
  border: solid 1px #ececec;
  margin-top: 60px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -2px;
  text-decoration: none;
  span {
    display: flex;
    align-items: center;
    line-height: 1.5;
    svg {
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
  }
`;
