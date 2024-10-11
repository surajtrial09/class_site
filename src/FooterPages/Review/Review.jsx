import React from 'react';
import './Review.css'; // External CSS for styling and animations

const Review = () => {
  return (
    <div id="testimonials-container">
      <h1 id="testimonials-heading">What Our Students Say</h1>
      
      <div id="testimonials-grid">
        <div className="testimonial">
          <img src="/path-to-student1.jpg" alt="Sarah" className="student-img" />
          <p className="testimonial-quote">"This art class transformed the way I express my creativity. I’ve learned so much from Jane!"</p>
          <span className="student-name">- Sarah L.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student2.jpg" alt="Michael" className="student-img" />
          <p className="testimonial-quote">"Jane's teaching method is so refreshing. She makes everything seem easy and fun!"</p>
          <span className="student-name">- Michael B.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student3.jpg" alt="Emily" className="student-img" />
          <p className="testimonial-quote">"I finally feel confident in my art. Every class with Jane feels inspiring!"</p>
          <span className="student-name">- Emily R.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student4.jpg" alt="David" className="student-img" />
          <p className="testimonial-quote">"I would recommend this art class to anyone looking to sharpen their skills or just have fun!"</p>
          <span className="student-name">- David H.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student5.jpg" alt="Lisa" className="student-img" />
          <p className="testimonial-quote">"I've gained so much confidence in my art. Jane's encouragement helped me find my style!"</p>
          <span className="student-name">- Lisa K.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student6.jpg" alt="Tom" className="student-img" />
          <p className="testimonial-quote">"The atmosphere in this class is so positive. You learn a lot while having a great time."</p>
          <span className="student-name">- Tom W.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student7.jpg" alt="Anna" className="student-img" />
          <p className="testimonial-quote">"I’ve never enjoyed learning art more than I have here. Jane's teaching style is incredible!"</p>
          <span className="student-name">- Anna P.</span>
        </div>

        <div className="testimonial">
          <img src="/path-to-student8.jpg" alt="James" className="student-img" />
          <p className="testimonial-quote">"A fantastic place to unlock your creativity. I’ve learned techniques I never thought I could!"</p>
          <span className="student-name">- James G.</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
