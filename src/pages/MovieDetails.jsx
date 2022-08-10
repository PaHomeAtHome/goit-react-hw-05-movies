import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/API';
import { BackDrop } from 'components/ResultItem/ResultItem.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieInfo(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);

  console.log(movie);
  const { title, backdrop_path } = movie;
  return (
    <>
      {Object.keys(movie).length > 0 && (
        <>
          <BackDrop
            src={'https://image.tmdb.org/t/p/original/' + backdrop_path}
            alt={title}
          />
          <div>
            <h2>{title}</h2>
            <table>
              <tbody>
                {Object.keys(movie).map(key => {
                  if (
                    (movie[key] !== null) &
                    (movie[key] !== 0) &
                    (movie[key] !== false) &
                    (key !== `backdrop_path`) &
                    (key !== `id`) &
                    (key !== `poster_path`)
                  ) {
                    if (Array.isArray(movie[key])) {
                      return (
                        <tr key={key}>
                          <td>{key}</td>
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
                                el.map(el => movie[key][index][el]).join(', ')
                              )
                              .join(', ')}
                          </td>
                        </tr>
                      );
                    }
                    if (typeof movie[key] === 'object') {
                      return (
                        <tr key={key}>
                          <td>{key}</td>
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
                        <td>{key}</td>
                        <td>{movie[key].toString()}</td>
                      </tr>
                    );
                  }
                  return false;
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};