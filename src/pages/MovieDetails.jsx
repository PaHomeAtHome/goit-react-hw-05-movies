import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/API';
import {
  BackDrop,
  Table,
  MovieInfo,
  MovieTitle,
  TableLink,
} from 'components/ResultItem/ResultItem.styled';

import { ExtraLink } from 'components/ResultItem/ResultItem.styled';

import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieInfo(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  const { title, backdrop_path } = movie;
  return (
    <>
      {Object.keys(movie).length > 0 && (
        <MovieInfo>
          <BackDrop
            src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
            alt={title}
          />
          <div>
            <MovieTitle>{title.toUpperCase()}</MovieTitle>
            <ExtraLink to="cast">Cast</ExtraLink>
            <ExtraLink to="reviews">Reviews</ExtraLink>
            <Outlet />
            <Table>
              <tbody>
                {Object.keys(movie).map(key => {
                  if (
                    (movie[key] !== null) &
                    (movie[key] !== 0) &
                    (movie[key] !== false) &
                    (movie[key] !== '') &
                    (key !== `backdrop_path`) &
                    (key !== `id`) &
                    (key !== `poster_path`)
                  ) {
                    if (Array.isArray(movie[key])) {
                      return (
                        <tr key={key}>
                          <th>
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replaceAll('_', ' ')}
                          </th>
                          <td>
                            {movie[key]
                              .map(el =>
                                Object.keys(el).filter(
                                  el =>
                                    (el !== 'id') &
                                    !el.includes('_path') &
                                    !el.includes('iso_')
                                )
                              )
                              .map((el, index) =>
                                el
                                  .map(el => movie[key][index][el])
                                  .filter(
                                    (el, index, array) =>
                                      index === array.indexOf(el)
                                  )
                                  .join(', ')
                              )

                              .join(', ')}
                          </td>
                        </tr>
                      );
                    }
                    if (typeof movie[key] === 'object') {
                      return (
                        <tr key={key}>
                          <th>
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replaceAll('_', ' ')}
                          </th>
                          <td>
                            {Object.keys(movie[key])
                              .filter(
                                el =>
                                  !el.includes('_path') &
                                  (el !== 'id') &
                                  !el.includes('iso_')
                              )
                              .map(el => movie[key][el])
                              .toString()}
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={key}>
                        <th>
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replaceAll('_', ' ')}
                        </th>
                        <td>
                          {(movie[key].toString().includes('https') && (
                            <TableLink href={movie[key].toString()}>
                              {movie[key].toString()}
                            </TableLink>
                          )) ||
                            movie[key].toString()}
                        </td>
                      </tr>
                    );
                  }
                  return false;
                })}
              </tbody>
            </Table>
          </div>
        </MovieInfo>
      )}
    </>
  );
};
