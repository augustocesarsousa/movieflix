import './styles.css';

const MovieCadList = () => {
  return (
    <div className="base-card movie-card-list-container">
      <div className="movie-card-list-banner-content">
        <img
          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg"
          alt="Capa do filme"
        />
      </div>
      <div className="movie-card-list-description-content">
        <h1 className="movie-card-list-description-title">A Voz do Silêncio</h1>
        <p className="movie-card-list-description-year">2016</p>
        <h2 className="movie-card-list-description-subtitle">Koe no Katachi</h2>
      </div>
    </div>
  );
};

export default MovieCadList;
