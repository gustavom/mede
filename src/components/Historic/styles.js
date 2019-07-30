import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
  max-width: 700px;
  padding: 50px 0 10px;
  animation: fade-in-bottom ease 0.4s forwards;
  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 50%;
    margin-left: -25%;
    width: 50%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
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

  .main-title {
    position: relative;
    padding: 20px 0;
    margin: 20px 0;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    font-weight: 300;
    font-size: 35px;
    color: #ffffff;
    padding-bottom: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #fff;
    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 25px;
      margin-bottom: 25px;
      &:before {
        position: absolute;
        content: '';
        display: block;
        bottom: 0;
        left: 50%;
        margin-left: -40%;
        width: 80%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.2);
      }
      div {
        flex: 1 1 33.33%;
        /* margin: 0 10px; */
        padding: 0 25px;
        border-right: solid 1px rgba(255, 255, 255, 0.2);
        .title {
          display: block;
          font-size: 16px;
          font-weight: 300;
          padding: 0 2px 10px;
          margin-bottom: 5px;
          border-bottom: solid 1px rgba(255, 255, 255, 0.05);
        }
        .result {
          padding: 0 5px 0;
          & > span {
            font-size: 35px;
            font-weight: 200;
          }
        }
        &:last-child {
          border: 0;
        }
      }
      &:last-child {
        &:before {
          display: none;
        }
      }
    }
  }
`;
