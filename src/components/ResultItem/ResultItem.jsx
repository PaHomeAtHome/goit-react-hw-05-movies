export const ResultsItem = ({ result }) => {
  const { title, overview, poster_path } = result;
  return (
    <li>
      <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
    </li>
  );
};
