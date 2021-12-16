import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import history from './util/history';

const Routes = () => (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/movies" exact={true} >
                    <Movies />
                </PrivateRoute>
                <PrivateRoute path="/movies/:movieId" exact={false}>
                    <MovieDetails />
                </PrivateRoute>
            </Switch>
        </Router>
);

export default Routes;