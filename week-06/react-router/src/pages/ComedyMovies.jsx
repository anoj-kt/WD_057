import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard';

const ComedyMovies = () => {
  const filteredMovies = movies.filter((movie) => movie.genre === 'Comedy');

  return (
    <div className='movie-list'>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ComedyMovies;
