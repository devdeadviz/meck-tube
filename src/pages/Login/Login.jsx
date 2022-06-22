import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { login } from "../../services";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { authDispatch } = useAuth();

  const loginHandler = async (e, userObj) => {
    e.preventDefault();
    const { foundUser: user, encodedToken } = await login(userObj);
    authDispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("encodedToken", encodedToken);
  };

  return (
    <div className="login-wrapper">
      <div className="vertical-card-wrapper login-card-wrapper box-shadow">
        <div>
          <h2 className="m-4 text-center">Login</h2>
        </div>
        <div className="vertical-card-body my-4 mx-3">
          <form action="submit">
            <label htmlFor="email-input" className="my-3 py-5">
              Email address
            </label>
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="kuldeep@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <label htmlFor="password-input" className="my-3">
              Password
            </label>
            <input
              type="password"
              id="password-input"
              name="name"
              placeholder="*********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <div className="form-options flex flexJustifyBetween flexAlignItemsCenter mt-3 mb-5">
              <label htmlFor="remember">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="remember"
                  name="rememberme"
                  value="RememberMe"
                />
                Remember me
              </label>
              <Link className="text-decoration-none" to="#">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              onClick={(e) => loginHandler(e, user)}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-primary submit-btn mt-4"
              onClick={(e) =>
                loginHandler(e, {
                  email: "kuldeepgupta@gmail.com",
                  password: "kuldeepgupta",
                })
              }
            >
              Login as Guest
            </button>
          </form>
        </div>
        <div className="vertical-card-footer text-center my-5">
          <Link className="text-decoration-none" to="/signup">
            Create new Account <i className="fa-solid fa-right-long mx-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
