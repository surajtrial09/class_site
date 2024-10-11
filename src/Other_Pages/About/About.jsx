import React from 'react';
import './About.css';
import about_img from '../../assets/about_img.jpg';
import teacher from '../../assets/art_teacher.jpeg';
import FAQSection from './FAQSection'; // Import the FAQSection component
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="container my-5" id="about-container">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="about-row">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" id="about-text">
            <h1 className="display-4 fw-light lh-1 text-body-emphasis" id="about-heading">
              Our Art Class is a Creative Centre, which is dedicated to teaching and involving learners.
            </h1>
            <p className="lead" id="about-description">
              "Our art classes inspire creativity and self-expression through hands-on exploration of various mediums and techniques. We provide a supportive environment for all skill levels. Join us to unleash your artistic potential and bring your vision to life!"
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3" id="about-buttons">
              <Link to="/class_site/Formenroll">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" id="enroll-button">
                Enroll Now
              </button>
              </Link>
              <Link to="/class_site/contact">
              <button type="button" className="btn btn-outline-secondary btn-lg px-4" id="contact-button">
                Contact Us
              </button>
              </Link>
              
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" id="about-image">
            <img className="rounded-lg-3" src={about_img} alt="Art Class" width="720" />
          </div>
        </div>
      </div>

      {/* Teacher Section */}
      <div className="row p-4 mt-5 rounded-3 border shadow-lg" id="teacher-section">
        <div className="col-lg-4 p-0 overflow-hidden shadow-lg" id="teacher-image">
          <img className="rounded-lg-3" src={teacher} alt="Art Class Teacher" width="720" />
        </div>
        <div className="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3" id="teacher-info">
          <h2 className="display-5 fw-normal lh-1 text-body-emphasis" id="teacher-heading">
            Meet Our Art Teacher
          </h2>
          <h3 className="fw-bold" id="teacher-name">Ms. Sarah Johnson</h3>
          <p className="lead" id="teacher-description">
            Ms. Johnson is a professional artist with over 10 years of experience in various art forms including painting, sculpture, and mixed media. She is passionate about guiding learners to explore their creativity and improve their artistic skills.
          </p>
          <ul className="list-unstyled" id="teacher-details">
            <li><strong>Specialties:</strong> Painting, Sculpture, Paper Crafts</li>
            <li><strong>Experience:</strong> 13+ years</li>
            <li><strong>Education:</strong> Scholar in Madhubani & Advanced Arts</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection /> {/* Render the FAQ section */}
    </>
  );
};

export default About;
