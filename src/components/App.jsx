import { Route, Routes } from 'react-router-dom';

import Container from './Container/Container';
import fetchResult from 'services/API';
import { useState, useEffect } from 'react';
import { ResultsList } from './ResultList/ResultList';
import { SharedLayout } from './SharedLayout/SharedLayout';
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
          {/* <Route path="mission" element={<Mission />}></Route>
          <Route path="mission" element={<Mission />}></Route> */}
        </Route>
      </Routes>
      <ResultsList results={results} />
    </Container>
  );
};
