import { Route, Routes } from 'react-router-dom';
import fetchResult from 'services/API';
import { useState, useEffect } from 'react';
import Container from './Container/Container';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';

export const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResult().then(response => {
      const results = response.map(movie => movie);
      setResults(results);
    });
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home results={results} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
