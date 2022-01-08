import { Movie } from '../../types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCardDetails = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card-details-container">
      <div className="movie-card-details-banner-content">
        <img src={movie.imgUrl} alt="Capa do filme" />
      </div>
      <div className="movie-card-details-description-content">
        <h1 className="movie-card-details-description-title">{movie.title}</h1>
        <p className="movie-card-details-description-year">{movie.year}</p>
        <h2 className="movie-card-details-description-subtitle">
          {movie.subTitle}
        </h2>
        <p className="movie-card-details-description-synopsis">
          {movie.synopsis}
        </p>
      </div>
    </div>
  );
};

export default MovieCardDetails;
