import styled from 'styled-components';

export const Container = styled.section`
  color: #fff;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .speed-main {
    /* flex: 1 1 100%; */
    width: 100%;
    text-align: center;
    font-weight: 300;
    font-size: 50px;
    padding-bottom: 55px;
    .title {
      display: block;
      text-align: center;
      font-weight: 300;
      font-size: 45px;
      color: #ffffff;
      padding-bottom: 15px;
    }
    .numbers {
      font-size: 100px;
      font-weight: 700;
    }
  }
  .speed-item {
    flex: 1;
    padding: 0 25px 25px;
    font-weight: 300;
    font-size: 30px;
    color: #ffffff;
    .title {
      display: block;
      text-align: left;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      font-weight: 300;
      font-size: 30px;
      color: #ffffff;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    .numbers {
      font-size: 50px;
      font-weight: 600;
    }
  }
`;
