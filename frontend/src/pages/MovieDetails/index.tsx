import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import SearchCard from '../../components/SearchCard';
import { Review } from '../../types/review';
import { SpringList } from '../../types/vendor/spring';
import { hasAnyRoles } from '../../util/auth';
import { requestBackend } from '../../util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<SpringList<Review>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response);
    });
  }, [movieId]);

  return (
    <div className="detail-container">
      <div className="detail-contant-title">
        <h1>{`Tela detalhes do filme id: ${movieId}`}</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="detail-contant-search">
          <SearchCard movieId={Number(movieId)}/>
        </div>
      )}
      {reviews?.data.map((item) => (
        <div className="detail-content-review base-card">
          <ReviewCard review={item} />
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
