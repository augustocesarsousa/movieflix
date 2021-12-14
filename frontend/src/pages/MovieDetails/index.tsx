import ReviewCard from '../../components/ReviewCard';
import SearchCard from '../../components/SearchCard';
import './styles.css';

const MovieDetails = () => {
    return(
        <div className="detail-container">
            <div className="detail-contant-title">
                <h1>Tela detalhes do filme id: 1</h1>
            </div>
            <div className="detail-contant-search">
                <SearchCard />
            </div>
            <div className="detail-content-review base-card">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
}

export default MovieDetails;