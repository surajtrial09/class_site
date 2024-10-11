import React from 'react';
import './Instructor.css'; // External CSS for styling and animations

const Instructor = () => {
  return (
    <div id="instructor-container">
      <h1 id="instructor-heading">Meet Our Instructor</h1>

      <div id="instructor-card">
        <img src="/path-to-instructor.jpg" alt="Instructor" id="instructor-img" />
        <h3 id="instructor-name">Jane Doe</h3>

        <p id="instructor-desc">
          Jane Doe is a passionate and experienced art teacher with over a decade of experience in the world of fine arts.
          She holds a Bachelor's degree in Fine Arts and a Master's degree in Visual Arts. Jane specializes in oil painting,
          watercolor techniques, and abstract expressionism. Her works have been exhibited in several renowned galleries, 
          and she has received multiple awards for her creativity and innovation in painting.
        </p>

        <h4 id="instructor-education-heading">Education & Certifications</h4>
        <p id="instructor-education">
          • Bachelor’s in Fine Arts - Art Academy University<br />
          • Master’s in Visual Arts - National School of Art<br />
          • Certified Instructor in Creative Painting Techniques<br />
          • Attended Masterclass workshops with acclaimed artists globally
        </p>

        <h4 id="instructor-philosophy-heading">Teaching Philosophy</h4>
        <p id="instructor-philosophy">
          Jane believes that art is not just a skill, but a form of self-expression that anyone can master with patience
          and practice. Her teaching philosophy is centered on fostering creativity, confidence, and personal growth in each
          student. She ensures that her classes are interactive, fun, and tailored to meet the needs of both beginners and advanced learners.
        </p>

        <h4 id="instructor-skills-heading">Skills & Expertise</h4>
        <ul id="instructor-skills">
          <li>Oil Painting</li>
          <li>Watercolor Techniques</li>
          <li>Abstract Art</li>
          <li>Landscape and Portraiture</li>
          <li>Digital Art and Graphic Design</li>
          <li>Creative Expression</li>
        </ul>

        <button id="instructor-more" className="instructor-button">Learn More</button>
      </div>
    </div>
  );
};

export default Instructor;
