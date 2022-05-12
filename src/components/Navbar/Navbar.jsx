import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img
          src="/assets/meck-tube-logo.png"
          alt="MeckTube"
          className="navbar-logo"
        />
        <h1>
          <a className="header-heading" href="../../../index.html">
            MeckTube
          </a>
        </h1>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li></li>
            <li>
              <Link to="/login">
                <button
                  type="button"
                  class="btn btn-outline-primary login-btn m-2"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
