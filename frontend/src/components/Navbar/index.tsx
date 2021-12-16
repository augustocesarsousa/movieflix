import { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { removeAuthData } from '../../util/storage';
import './styles.css';

type LocationState = {
  from: string;
};

const Navbar = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/' } };

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace(from);
  };

  return (
    <nav className="navbar main-nav bg-primary">
      <Link to="/movies" className="nav-logo-text">
        <h4>Movie Flix</h4>
      </Link>
      {authContextData.authenticated ? (
        <Link to="/" onClick={handleLogoutClick} className="nav-button">
          sair
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
