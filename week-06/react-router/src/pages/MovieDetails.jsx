import movies from '../data/movies.json';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieID } = useParams();

  const matchingMovie = movies.find((movie) => movie.id.toString() === movieID);

  return (
    <div>
      <h1>{matchingMovie.name}</h1>
      <img src={matchingMovie.image} alt='' />
      <p>Genre: {matchingMovie.genre}</p>
      <p>{matchingMovie.description}</p>
    </div>
  );
};

export default MovieDetails;
