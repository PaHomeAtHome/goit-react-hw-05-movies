import { MovieCard } from './ResultItem.styled';
import { Title, Label, Link } from './ResultItem.styled';

export const ResultsItem = ({ result }) => {
  const { title, name, poster_path } = result;
  return (
    <MovieCard>
      <Link to={`movies/${result.id}`}>
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title || name}
        />
        <Label>
          <Title>{title || name}</Title>
        </Label>
      </Link>
    </MovieCard>
  );
};
