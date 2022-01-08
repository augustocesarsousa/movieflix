import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault';
import MovieCardDetails from '../../components/MovieCardDetails';
import ReviewCard from '../../components/ReviewCard';
import { Review } from '../../types/review';
import { SpringList } from '../../types/vendor/spring';
import { hasAnyRoles } from '../../util/auth';
import { postReview, requestBackend } from '../../util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: number;
};

export const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<SpringList<Review>>();

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = Number(movieId);

    postReview(formData)
      .then((res) => {
        reviews?.data.push(res.data);        
        ReactDOM.render(<CreateReviewCard />, document.getElementById('div-review'));
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO ', error);
      });
  };

  const CreateReviewCard = () => {

    const listItems = reviews?.data.map((item) => {
      return(
      <div key={item.id}>
        <ReviewCard review={item} />
      </div>);
    });
    return (
      <>{listItems}</>
    );
  };

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
        <MovieCardDetails />
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="detail-contant-add-review">
          <div className="card-container base-card">
            {hasError && (
              <div className="alert alert-danger">
                Erro ao fazer a avaliação!
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('text', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className="form-control base-input"
                placeholder="Deixe sua avaliação aqui"
                name="text"
              />
              <ButtonDefault text="Salvar avaliação" />
            </form>
          </div>
        </div>
      )}
      <div className="detail-content-review base-card" id="div-review">
        <CreateReviewCard />        
      </div>
    </div>
  );
};

export default MovieDetails;
