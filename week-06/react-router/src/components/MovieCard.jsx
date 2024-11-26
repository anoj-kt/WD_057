import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className='movie-card'>
        <img src={movie.image} alt='' />
      </div>
    </Link>
  );
};

export default MovieCard;
