import './styles.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MovieFilter = () => {
  return (
    <div className="base-card movie-filter-container">
      <form>
        <Select
          options={options}
          isClearable          
          classNamePrefix="movie-filter-select"
          placeholder="Categoria"
        />
      </form>
    </div>
  );
};

export default MovieFilter;
