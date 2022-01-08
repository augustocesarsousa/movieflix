import { NavLink } from 'react-router-dom';
import MovieCadList from '../../components/MovieCardList';
import './styles.css';

const Movies = () => {
    return (
        <div className="movie-container">
            <h1>Tela listagem de filmes</h1>
            <NavLink to="/movies/1"> Acessar /movies/1</NavLink>
            <NavLink to="/movies/2"> Acessar /movies/2</NavLink>
            <MovieCadList />
        </div>
    );
}

export default Movies;