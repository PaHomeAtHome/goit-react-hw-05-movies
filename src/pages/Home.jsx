import { ResultsList } from 'components/ResultList/ResultList';
import { Title } from 'components/ResultList/ResultList.styled';

export const Home = ({ results }) => {
  return (
    <>
      <Title>TRENDING TODAY</Title>
      <ResultsList results={results} />
    </>
  );
};
