import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 5px 5px;
  border-bottom: 1px solid black;
  background-color: black;

  > nav {
    display: flex;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition-duration: 200ms;
  font-size: 21px;
  margin: 5px;

  &.active,
  &:hover {
    cursor: pointer;
  }

  &:hover {
    color: red;
  }

  &.active {
    background-color: #dddd00;
    color: black;
  }
`;
