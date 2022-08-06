export const ResultsItem = ({ result }) => {
  const { title, overview } = result;
  return (
    <li>
      <h3>{title}</h3>
      <p>{overview}</p>
    </li>
  );
};
