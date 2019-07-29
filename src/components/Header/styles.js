import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 90px;
  padding: 15px;
  border-bottom: solid 1px #eee;
  svg {
    width: 100px;
    height: 25px;
    path {
      fill: #222;
    }
  }
`;
