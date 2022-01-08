import { NavLink } from 'react-router-dom';
import MovieCadList from '../../components/MovieCardList';
import './styles.css';

const Movies = () => {
  return (
    <div className="movie-container">
      <div className="row movie-card-container">
        <div className="col-sm-6 col-xl-3">
          <NavLink to="/movies/1">
            <MovieCadList />
          </NavLink>
        </div>
        <div className="col-sm-6 col-xl-3">
          <NavLink to="/movies/1">
            <MovieCadList />
          </NavLink>
        </div>
        <div className="col-sm-6 col-xl-3">
          <NavLink to="/movies/1">
            <MovieCadList />
          </NavLink>
        </div>
        <div className="col-sm-6 col-xl-3">
          <NavLink to="/movies/1">
            <MovieCadList />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Movies;
