export const ResultsItem = ({ result }) => {
  const { title, name, poster_path } = result;
  return (
    <li>
      <img
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title || name}
        width="25px"
      />
      <h3>{title || name}</h3>
    </li>
  );
};
