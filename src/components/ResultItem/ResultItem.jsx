import { MovieCard } from './ResultItem.styled';
import { Title, Label, Link } from './ResultItem.styled';

export const ResultsItem = ({ result, search }) => {
  const { title, name, poster_path } = result;
  const image =
    (poster_path && 'https://image.tmdb.org/t/p/w500' + poster_path) ||
    `https://critics.io/img/movies/poster-placeholder.png`;
  const path = (search === true && `${result.id}`) || `movies/${result.id}`;
  return (
    <MovieCard>
      <Link to={path}>
        <img src={image} alt={title || name} />
        <Label>
          <Title>{title || name}</Title>
        </Label>
      </Link>
    </MovieCard>
  );
};
