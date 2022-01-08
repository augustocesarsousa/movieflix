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
        <h1>A Voz do Silêncio</h1>
        <h2>2016</h2>
        <p>Koe no Katachi</p>
      </div>
    </div>
  );
};

export default MovieCadList;
