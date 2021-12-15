import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

const Routes = () => (
    <div>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Movies />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Routes;