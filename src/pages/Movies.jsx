import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from 'components/ResultItem/ResultItem.styled';
import { findMovies } from 'services/API';
import { ResultsList } from '../components/ResultList/ResultList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [results, setResults] = useState([]);

  useEffect(() => {
    findMovies(query).then(response => {
      const results = response.map(movie => movie);
      setResults(results);
    });
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
          updateQueryString(e.target[0].value.trim().toLowerCase());
          findMovies(query);
        }}
      >
        <SearchInput></SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchForm>
      {results.length > 0 && <ResultsList results={results} />}

      <Outlet />
    </>
  );
};
