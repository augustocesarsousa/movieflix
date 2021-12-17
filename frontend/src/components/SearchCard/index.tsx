import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postReview } from '../../util/requests';
import ButtonDefault from '../ButtonDefault';
import './styles.css';

type Props = {
  movieId: number;
};

type FormData = {
  text: string;
  movieId: number;
};

const SearchCard = ({ movieId }: Props) => {
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = movieId;

    postReview(formData)
      .then((response) => {
        console.log(response);
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO ', error);
      });
  };

  return (
    <div className="card-container base-card">
      {hasError && (
        <div className="alert alert-danger">Erro ao fazer requisição!</div>
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
  );
};

export default SearchCard;
