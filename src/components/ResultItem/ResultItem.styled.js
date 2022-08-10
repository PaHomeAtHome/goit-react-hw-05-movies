import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Label = styled.div`
  padding: 10px;
  flex-grow: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #00000044;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  transition-duration: 300ms;
  border-radius: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
    color: white;
    opacity: 1;

    ${Label} {
      background-color: #cc0000ff;
    }
  }
`;

export const Title = styled.h3`
  margin: 0px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: inherit;
`;

export const BackDrop = styled.img`
  display: block;
  width: 100%;
`;
