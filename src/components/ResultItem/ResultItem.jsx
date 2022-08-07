import { MovieCard } from './ResultItem.styled';
import { Title } from './ResultItem.styled';

export const ResultsItem = ({ result }) => {
  const { title, name, poster_path } = result;
  return (
    <MovieCard>
      <img
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title || name}
      />
      <Title>{title || name}</Title>
    </MovieCard>
  );
};
