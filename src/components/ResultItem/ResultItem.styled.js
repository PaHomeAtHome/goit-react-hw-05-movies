import styled from 'styled-components';
// import { List } from 'components/ResultList/ResultList.styled';

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
  max-width: 100%;
  transition-duration: 250ms;
  border-radius: 10px;
  opacity: 0.9;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    object-fit: cover;
    transition-duration: 250ms;
    opacity: 0.9;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
    color: white;
    opacity: 1;

    img {
      opacity: 1;
    }

    ${Label} {
      background-color: #991111ff;
    }
  }
`;

export const Title = styled.h3`
  margin: 0px;
`;
