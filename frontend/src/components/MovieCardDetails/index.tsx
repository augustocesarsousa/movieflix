import './styles.css';

const MovieCardDetails = () => {
  return (
    <div className="base-card movie-card-details-container">
      <div className="movie-card-details-banner-content">
        <img
          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg"
          alt="Capa do filme"
        />
      </div>
      <div className="movie-card-details-description-content">
        <h1 className="movie-card-details-description-title">A Voz do Silêncio</h1>
        <p className="movie-card-details-description-year">2016</p>
        <h2 className="movie-card-details-description-subtitle">Koe no Katachi</h2>
        <p className="movie-card-details-description-synopsis">
          Nishimiya Shouko é uma estudante com deficiência auditiva. Durante o
          ensino fundamental, após se transferir para uma nova escola, Shouko
          passa a ser alvo de bullying e em pouco tempo precisa se transferir. O
          que ela não esperava é que alguns anos depois, Ishida Shouya, um dos
          valentões que tanto a fez sofrer no passado surgisse de novo em sua
          vida com um novo propósito.
        </p>
      </div>
    </div>
  );
};

export default MovieCardDetails;
