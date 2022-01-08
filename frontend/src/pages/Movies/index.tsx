import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCadList from '../../components/MovieCardList';
import MovieFilter from '../../components/MovieFilter';
import Pagination from '../../components/Pagination';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './styles.css';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies`,
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 4,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };

  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <div className="movies-container">
      <div className="movies-filter-container">
        <MovieFilter />
      </div>
      <div className="row movies-card-container">
        {page?.content.map((movie) => (
          <div className="col-sm-6 col-xl-3" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCadList movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        pageCount={page ? page?.totalPages : 0}
        range={3}
        onChange={getMovies}
      />
    </div>
  );
};

export default Movies;
