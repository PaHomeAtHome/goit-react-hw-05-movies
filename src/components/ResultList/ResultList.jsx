import { ResultsItem } from 'components/ResultItem/ResultItem';

export const ResultsList = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {results.map(result => (
        <ResultsItem result={result} key={result.id} />
      ))}
    </ul>
  );
};
