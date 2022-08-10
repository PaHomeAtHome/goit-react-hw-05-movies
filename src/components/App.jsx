import { Route, Routes } from 'react-router-dom';
import fetchResult from 'services/API';
import { useState, useEffect } from 'react';
import Container from './Container/Container';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
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
          <Route path="movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Container>
  );
};
