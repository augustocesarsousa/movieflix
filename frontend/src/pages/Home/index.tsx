import './styles.css';

import BannerImage from '../../assets/images/banner-image.png';
import Login from './Login';

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-banner-container">
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do seu filme favorito</p>
                <img src={BannerImage} alt="imagem banner"/>
            </div>
            <div className="home-form-container">
                <Login />
            </div>
        </div>
    );
}

export default Home;