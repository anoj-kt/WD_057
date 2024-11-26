import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard';

const AllMovies = () => {
  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMovies;
