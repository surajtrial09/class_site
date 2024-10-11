import React from 'react';
import './Forget.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Forgot = () => {
  return (
    <sectionf id="forgot-password-container" className="container d-flex flex-column vh-100">
      <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
          {/* Card */}
          <div className="card shadow">
            {/* Card body */}
            <div className="card-body p-6 d-flex flex-column gap-4">
              <div>
                {/* <Link to="/">
                  <img src="../assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="logo-icon" />
                </Link> */}
                <div className="d-flex flex-column gap-1">
                  <h1 className="mb-0 fw-bold">Forgot Password</h1>
                  <p className="mb-0">Fill the form to reset your password.</p>
                </div>
              </div>
              {/* Form */}
              <form className="needs-validation" noValidate>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="forgetEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="forgetEmail"
                    className="form-control"
                    name="forgetEmail"
                    placeholder="Enter Your Email"
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid email.</div>
                </div>
                {/* Button */}
                <div className="mb-3 d-grid">
                  <button type="submit" className="btn btn-primary" id='resetbtn'>Send Reset Link</button>
                </div>
                <span>
                  Return to{' '}
                  <Link to="/class_site/login" className="signin-link">sign in</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </sectionf>
  );
};

export default Forgot;

