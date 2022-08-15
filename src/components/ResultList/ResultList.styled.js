import styled from 'styled-components';

export const List = styled.ul`
  max-width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  list-style: none;
  background-color: #111111bb;
  color: #ffffffbb;

  &:hover {
    & > *:not(:hover) {
      opacity: 0.1;
    }
  }
`;

export const CastList = styled.ul`
  max-width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  list-style: none;
  background-color: #111111bb;
  color: #ffffffbb;

  &:hover {
    & > *:not(:hover) {
      opacity: 0.1;
    }
  }
`;
