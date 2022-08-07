import { ResultsItem } from 'components/ResultItem/ResultItem';
import { List } from './ResultList.styled';

export const ResultsList = ({ results }) => {
  console.log(results);
  return (
    <List>
      {results.map(result => (
        <ResultsItem result={result} key={result.id} />
      ))}
    </List>
  );
};
