import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard';

const ActionMovies = () => {
  const filteredMovies = movies.filter((movie) => movie.genre === 'Action');

  return (
    <div className='movie-list'>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ActionMovies;
