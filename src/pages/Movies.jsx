import { Outlet } from 'react-router-dom';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from 'components/ResultItem/ResultItem.styled';

export const Movies = () => {
  return (
    <main>
      <SearchForm>
        <SearchInput></SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchForm>

      <Outlet />
    </main>
  );
};
