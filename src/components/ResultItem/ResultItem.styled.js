import styled from 'styled-components';

export const MovieCard = styled.li`
  max-width: 100%;
  transition-duration: 200ms;
  color: #ffffffbb;
  border: 1px solid #77777777;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    scale: 1.03;
    background-color: #ffffff22;
    color: white;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  margin: 0px;
  padding: 10px;
`;
