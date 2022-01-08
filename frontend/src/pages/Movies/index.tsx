import { NavLink } from 'react-router-dom';
import MovieCadList from '../../components/MovieCardList';
import MovieFilter from '../../components/MovieFilter';
import Pagination from '../../components/Pagination';
import './styles.css';

const Movies = () => {
  return (
    <div className="movies-container">
      <div className="movies-filter-container">
        <MovieFilter />
      </div>
      <div className="row movies-card-container">
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
      <Pagination
        pageCount={10}
        range={3}
        onChange={() => {}}
      />
    </div>
  );
};

export default Movies;
