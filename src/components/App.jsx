import Container from './Container/Container';
import fetchResult from 'services/API';
import { useState, useEffect } from 'react';
import { ResultsList } from './ResultList/ResultList';

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
      <ResultsList results={results} />
    </Container>
  );
};
