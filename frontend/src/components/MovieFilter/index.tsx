import './styles.css';
import Select from 'react-select';
import { Genre } from '../../types/genre';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { requestBackend } from '../../util/requests';
import { AxiosRequestConfig } from 'axios';

export type MovieGenreData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieGenreData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieGenreData>();

  const onSubmit = (formData: MovieGenreData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: MovieGenreData = {
      genre: getValues('genre'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/genres`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="base-card movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectGenres}
              isClearable
              classNamePrefix="movie-filter-select"
              placeholder="Gênero"
              onChange={(value) => handleChangeGenre(value as Genre)}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#000',
                  primary: '#FFC700',
                },
              })}
            />
          )}
        />
      </form>
    </div>
  );
};

export default MovieFilter;
