import { Movie } from '../../types/movie';
import './styles.css';

type Props = {
  movie: Movie;
}

const MovieCadList = ({movie}: Props) => {
  return (
    <div className="base-card movie-card-list-container">
      <div className="movie-card-list-banner-content">
        <img
          src={movie.imgUrl}
          alt="Capa do filme"
        />
      </div>
      <div className="movie-card-list-description-content">
        <h1 className="movie-card-list-description-title">{movie.title}</h1>
        <p className="movie-card-list-description-year">{movie.year}</p>
        <h2 className="movie-card-list-description-subtitle">{movie.subTitle}</h2>
      </div>
    </div>
  );
};

export default MovieCadList;
