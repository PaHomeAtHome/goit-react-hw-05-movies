import { MovieCard } from './ResultItem.styled';
import { Title, Label, Link } from './ResultItem.styled';

export const ResultsItem = ({ result }) => {
  const { title, name, poster_path } = result;
  return (
    <Link to={`movies/${result.id}`}>
      <MovieCard>
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title || name}
        />
        <Label>
          <Title>{title || name}</Title>
        </Label>
      </MovieCard>
    </Link>
  );
};
