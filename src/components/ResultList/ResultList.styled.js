import styled from 'styled-components';

export const List = styled.ul`
  max-width: 100%;
  margin: 0px auto;
  padding: 20px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  list-style: none;
  background-color: #111111bb;
`;
