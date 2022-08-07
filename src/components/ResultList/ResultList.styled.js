import styled from 'styled-components';

export const List = styled.ul`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  list-style: none;
`;
