import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { CastList } from 'components/ResultList/ResultList.styled';
import {
  ActorCard,
  Actor,
  Character,
} from 'components/ResultItem/ResultItem.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <CastList>
      {cast.map(actor => {
        const { character, name, profile_path } = actor;
        const image =
          (profile_path && 'https://image.tmdb.org/t/p/w500' + profile_path) ||
          `https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg`;
        return (
          <ActorCard key={name}>
            <img src={image} alt={name} />
            <p>
              Character: <Character>{character}</Character>
              <br></br>
              Actor: <Actor>{name}</Actor>
            </p>
          </ActorCard>
        );
      })}
    </CastList>
  );
};
