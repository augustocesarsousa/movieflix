import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCadList from '../../components/MovieCardList';
import MovieFilter, { MovieGenreData } from '../../components/MovieFilter';
import Pagination from '../../components/Pagination';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieGenreData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieGenreData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies`,
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movies-container">
      <div className="movies-filter-container">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
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
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
