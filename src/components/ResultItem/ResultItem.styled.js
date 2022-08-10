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

export const MovieInfo = styled.div`
  background-color: #111111bb;
  padding: 30px;
  color: white;
`;

export const MovieTitle = styled.h2`
  padding: 30px 15px;
  background-color: #000000bb;
  margin: 0;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 700;
  color: yellow;
  text-shadow: 0px 0px 50px yellow;
`;

export const Table = styled.table`
  margin: auto;
  text-align: left;
  border-spacing: 0px;
  width: 100%;

  th,
  td {
    padding: 25px 30px;
  }

  th {
    background-color: #cf0000ee;
    font-weight: 700;
    font-size: 20px;
  }

  tr:nth-child(odd) {
    background-color: #00000077;

    th {
      background-color: #dd0000;
    }
  }

  td {
    background-color: #11111199;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const TableLink = styled.a`
  color: yellow;
  text-decoration: none;
`;
