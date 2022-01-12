import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault';
import MovieCardDetails from '../../components/MovieCardDetails';
import ReviewCard from '../../components/ReviewCard';
import { Movie } from '../../types/movie';
import { Review } from '../../types/review';
import { SpringList } from '../../types/vendor/spring';
import { hasAnyRoles } from '../../util/auth';
import { postReview, requestBackend } from '../../util/requests';
import { toast } from 'react-toastify';

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

  const [movie, setMovie] = useState<Movie>();

  const [reviews, setReviews] = useState<SpringList<Review>>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = Number(movieId);
    console.log(formData.text);
    postReview(formData)
      .then((res) => {
        reviews?.data.push(res.data);
        DisplayNone();
        ReactDOM.render(
          <CreateReviewCard />,
          document.getElementById('div-review')
        );
        setValue('text', '');
        toast.info('Avaliação salva com sucesso!');
      })
      .catch(() => {
        ToastError();
      });
  };

  const CreateReviewCard = () => {
    const listItems = reviews?.data.map((item) => {
      return (
        <div key={item.id}>
          <ReviewCard review={item} />
        </div>
      );
    });
    return <>{listItems}</>;
  };

  const DisplayNone = () => {
    const element = document.getElementById('div-review');

    if (reviews?.data.length === 0) {
      element?.classList.add('display-none');
    } else {
      element?.classList.remove('display-none');
    }
  };

  const ToastError = () => {
    toast.error('Avaliação não pode estar em branco!', {
      toastId: 0
    });
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

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
        {movie && <MovieCardDetails movie={movie} />}
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="detail-contant-add-review">
          <div className="card-container base-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('text', {
                  required: true,
                })}
                type="text"
                className="form-control base-input"
                placeholder="Deixe sua avaliação aqui"
                name="text"
                id="input-review"
              />
              {errors.text && ToastError()}
              <ButtonDefault text="Salvar avaliação" />
            </form>
          </div>
        </div>
      )}
      {DisplayNone()}
      <div className="detail-content-review base-card" id="div-review">
        <CreateReviewCard />
      </div>
    </div>
  );
};

export default MovieDetails;
