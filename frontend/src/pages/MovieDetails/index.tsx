import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import SearchCard from '../../components/SearchCard';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<Review>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
      console.log(response.data);
      console.log(reviews);
    });
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-contant-title">
        <h1>{`Tela detalhes do filme id: ${movieId}`}</h1>
      </div>
      <div className="detail-contant-search">
        <SearchCard />
      </div>
      <div className="detail-content-review base-card">
        {/* {reviews?.list.map((item) => (
          <ReviewCard review={item} />
        ))} */}
      </div>
    </div>
  );
};

export default MovieDetails;
