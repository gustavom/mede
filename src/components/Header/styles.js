import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 90px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: solid 1px rgba(238, 238, 238, 0.1);
  .logo {
    width: 100px;
    height: 25px;
    path {
      /* fill: #222; */
      fill: #fff;
    }
  }
`;
