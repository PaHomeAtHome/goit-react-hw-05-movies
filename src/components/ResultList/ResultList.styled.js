import styled from 'styled-components';

export const List = styled.ul`
  max-width: 100%;
  margin: 10px auto;
  padding: 30px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  list-style: none;
  background-color: black;
`;
