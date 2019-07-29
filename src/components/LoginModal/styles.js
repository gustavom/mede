import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
  .modal-inner {
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 30px;
    h3 {
      margin: 0;
      padding: 0;
      font-size: 26px;
      font-weight: 600;
      color: #222222;
    }
    form {
      padding: 30px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      input {
        width: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        color: #222222;
        padding: 15px 20px;
        border-radius: 3px;
        border: solid 1px #ebeaed;
        background-color: #f5f4f6;
        margin-bottom: 15px;
      }
      button {
        width: 100%;
        padding: 14px 10px;
        border-radius: 3px;
        background-color: #0dcb7d;
        border: 0;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
      }
    }
    & > .close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }
`;
