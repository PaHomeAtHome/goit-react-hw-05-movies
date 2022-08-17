import { MovieCard } from './ResultItem.styled';
import { Title, Label, Link } from './ResultItem.styled';

export const ResultsItem = ({ result }) => {
  const { title, name, poster_path } = result;
  const image =
    (poster_path && 'https://image.tmdb.org/t/p/w500' + poster_path) ||
    `https://critics.io/img/movies/poster-placeholder.png`;
  return (
    <MovieCard>
      <Link to={`movies/${result.id}`}>
        <img src={image} alt={title || name} />
        <Label>
          <Title>{title || name}</Title>
        </Label>
      </Link>
    </MovieCard>
  );
};
