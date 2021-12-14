import ButtonDefault from '../ButtonDefault';
import './styles.css';

const SearchCard = () => {
  return (
    <div className="card-container base-card">
      <input
        type="text"
        className="form-control base-input"
        placeholder="Deixe sua avaliação aqui"
        name="input-review"
      />
      <ButtonDefault text="Salvar avaliação" />
    </div>
  );
};

export default SearchCard;
