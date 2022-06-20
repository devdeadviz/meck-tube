import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
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
                  required
                />
                <label htmlFor="last-name-input">Last Name</label>
                <input
                  id="last-name-input"
                  type="text"
                  name="lastname"
                  placeholder="Gupta"
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
                    I accept all Terms & Conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
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
