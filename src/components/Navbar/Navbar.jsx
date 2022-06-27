import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { privateInstance } from "../../utils";

const Navbar = () => {
  const {
    authState: { authenticated },
  } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    privateInstance.defaults.headers.authorization = null;
    localStorage.clear();
    navigate(0);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <img
          src="/assets/meck-tube-logo.png"
          alt="MeckTube"
          className="navbar-logo"
        />
        <h1>
          <Link className="header-heading" to="/">
            MeckTube
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li>
              {authenticated ? (
                <button
                  type="button"
                  className="btn btn-outline-primary login-btn m-2"
                  onClick={logoutHandler}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-primary login-btn m-2"
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
