import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import lgo from '../../assets/main_logo.png'
import email2 from '../../assets/Login/email2.png'
import facebook from '../../assets/Login/facebook.png'
import video from '../../assets/Login/person.png'

const Login = () => {
  return (
    <>
      <sectionss id="login-container" className="d-flex flex-column vh-100">
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div id="login-card-container" className="col-lg-5 col-md-8 py-8 py-xl-0">
            {/* Card */}
            <div id="login-card" className="card shadow">
              {/* Card body */}
              <div id="login-card-body" className="card-body p-6 d-flex flex-column gap-4">
                <div>
                  {/* <a href="">
                    <img src={lgo} id="login-logo" className="mb-4" alt="logo-icon" />
                  </a> */}
                  <div id="login-title" className="d-flex flex-column gap-1">
                    <h1 className="mb-0 fw-bold">Sign in</h1>
                    <span>
                      Don’t have an account?
                      <Link to="/SignUp">
                      <a href="SignUp.jsx" id="sign-up-link" className="ms-1">Sign up</a>
                      </Link>
                    </span>
                  </div>
                </div>
                {/* Form */}
                <form id="login-form" className="needs-validation" noValidate>
                  {/* Username */}
                  <div id="username-container" className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">Username or email</label>
                    <input type="email" id="signInEmail" className="form-control" name="signInEmail" placeholder="Email address here" required />
                    <div className="invalid-feedback">Please enter a valid username.</div>
                  </div>
                  {/* Password */}
                  <div id="password-container" className="mb-3">
                    <label htmlFor="signInPassword" className="form-label">Password</label>
                    <input type="password" id="signInPassword" className="form-control" name="signInPassword" placeholder="**************" required />
                    <div className="invalid-feedback">Please enter a valid password.</div>
                  </div>
                  {/* Checkbox */}
                  <div id="rememberme-container" className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberme" required />
                      <label className="form-check-label" htmlFor="rememberme">Remember me</label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                    <div>
                    <Link to="/Forget">
                      <a id="forgot-password-link">Forgot your password?</a>
                      </Link>
                    </div>
                  </div>
                  <div>
                    {/* Button */}
                    <div id="login-button-container" className="d-grid">
                      <button type="submit" id="login-button" className="btn btn-primary">Sign in</button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div id="social-login" className="mt-4 text-center">
                    {/* Custom images for social login */}
                    {/* <a href="#" className="btn-social" id="facebook-login">
                      <img src={facebook} alt="Facebook" width="30" height="30" />
                    </a>
                    <a href="#" className="btn-social" id="twitter-login">
                      <img src={video} alt="youtube" width="30" height="30" />
                    </a>
                    <a href="#" className="btn-social" id="linkedin-login">
                      <img src={facebook} alt="facebook" width="30" height="30" /> */}
                    {/* </a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </sectionss>
    </>
  );
};

export default Login;
