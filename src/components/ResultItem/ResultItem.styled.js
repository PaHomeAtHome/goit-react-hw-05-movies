import styled from 'styled-components';

export const MovieCard = styled.li`
  max-width: 100%;
  padding: 10px 10px;
  transition-duration: 200ms;
  color: #ffffffbb;
  border: 1px solid #77777777;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    scale: 1.05;
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
  margin-top: 5px;
`;
