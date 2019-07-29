import styled from 'styled-components';

export const Container = styled.span`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #222222;
  color: #fff;
  &:hover {
    color: #666;
  }
  &.login-home {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    color: #fff;
  }
`;
