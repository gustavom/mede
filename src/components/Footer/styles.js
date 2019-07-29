import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #eeeeee;
  display: flex;
  border-top: solid 1px #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  li {
    font-size: 16px;
    margin-right: 25px;
    font-weight: 600;
    color: #555555;
    &:last-child {
      margin: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      text-transform: lowercase;
    }
  }
`;

export const Sign = styled.a`
  color: #333333;
  text-decoration: none;
  text-transform: lowercase;
`;
