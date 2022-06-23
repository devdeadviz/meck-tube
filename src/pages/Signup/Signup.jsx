import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { signup } from "../../services";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { authDispatch } = useAuth();

  const signupHandler = async (e, userObj) => {
    e.preventDefault();
    const { createdUser: user, encodedToken } = await signup(userObj);
    authDispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("encodedToken", encodedToken);
  };

  return (
    <div className="signup-wrapper">
      <div className="vertical-card-wrapper signup-card-wrapper box-shadow">
        <div>
          <h2 className="m-4 text-center">SignUp</h2>
        </div>
        <div className="vertical-card-body my-4 mx-3">
          <form id="signup-form" action="submit">
            <fieldset form="signup-form">
              <label htmlFor="first-name-input">First Name</label>
              <input
                id="first-name-input"
                type="text"
                name="firstname"
                placeholder="Kuldeep"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                required
              />
              <label htmlFor="last-name-input">Last Name</label>
              <input
                id="last-name-input"
                type="text"
                name="lastname"
                placeholder="Gupta"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                required
              />
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
                name="password"
                placeholder="*********"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              <label htmlFor="-confirm-password-input" className="my-3">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password-input"
                name="confirm-password"
                placeholder="*********"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                required
              />
              {user.password !== user.confirmPassword && (
                <div className="password-match">Passwords don't matched!</div>
              )}
              <div className="form-options flex flexJustifyBetween flexAlignItemsCenter mt-3 mb-5">
                <label htmlFor="remember">
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="remember"
                    name="rememberme"
                    value="RememberMe"
                  />
                  I accept all Terms & Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={user.password !== user.confirmPassword}
                onClick={(e) => signupHandler(e, user)}
              >
                Create New Account
              </button>
            </fieldset>
          </form>
        </div>
        <div className="vertical-card-footer text-center my-5">
          <Link className="text-decoration-none" to="/login">
            Already have an account
            <i className="fa-solid fa-right-long mx-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Signup };
