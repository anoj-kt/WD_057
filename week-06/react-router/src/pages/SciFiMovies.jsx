import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard';

const SciFiMovies = () => {
  const filteredMovies = movies.filter(
    (movie) => movie.genre === 'Science Fiction'
  );

  return (
    <div className='movie-list'>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SciFiMovies;
