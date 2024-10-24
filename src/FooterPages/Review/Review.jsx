import React from 'react';
import './Review.css'; 
import p_1 from '../../assets/Privacy_img/P_1.jpg'
import p_2 from '../../assets/Privacy_img/P_2.jpg'
import p_3 from '../../assets/Privacy_img/P_3.jpg'
import p_4 from '../../assets/Privacy_img/P_4.jpg'
import p_5 from '../../assets/Privacy_img/P_5.jpg'
import p_6 from '../../assets/Privacy_img/P_6.jpg'
import p_7 from '../../assets/Privacy_img/P_7.jpg'
import p_8 from '../../assets/Privacy_img/P_8.jpg'



const Review = () => {
  return (
    <div id="testimonials-container">
      <h1 id="testimonials-heading">What Our Students Say</h1>
      
      <div id="testimonials-grid">
        <div className="testimonial">
          <img src={p_1} alt="Sarah" className="student-img" />
          <p className="testimonial-quote">"This art class transformed the way I express my creativity. I’ve learned so much from Jane!"</p>
          <span className="student-name">- Soniya p.</span>
        </div>

        <div className="testimonial">
          <img src={p_2} alt="Michael" className="student-img" />
          <p className="testimonial-quote">"Jane's teaching method is so refreshing. She makes everything seem easy and fun!"</p>
          <span className="student-name">- sabbu.</span>
        </div>

        <div className="testimonial">
          <img src={p_3} alt="Emily" className="student-img" />
          <p className="testimonial-quote">"I finally feel confident in my art. Every class with Jane feels inspiring!"</p>
          <span className="student-name">- ritu R.</span>
        </div>

        <div className="testimonial">
          <img src={p_4} alt="David" className="student-img" />
          <p className="testimonial-quote">"I would recommend this art class to anyone looking to sharpen their skills or just have fun!"</p>
          <span className="student-name">- rohit H.</span>
        </div>

        <div className="testimonial">
          <img src={p_5} alt="Lisa" className="student-img" />
          <p className="testimonial-quote">"I've gained so much confidence in my art. Jane's encouragement helped me find my style!"</p>
          <span className="student-name">- Lisa K.</span>
        </div>

        <div className="testimonial">
          <img src={p_6} alt="Tom" className="student-img" />
          <p className="testimonial-quote">"The atmosphere in this class is so positive. You learn a lot while having a great time."</p>
          <span className="student-name">- Tom W.</span>
        </div>

        <div className="testimonial">
          <img src={p_7} alt="Anna" className="student-img" />
          <p className="testimonial-quote">"I’ve never enjoyed learning art more than I have here. Jane's teaching style is incredible!"</p>
          <span className="student-name">- Anna P.</span>
        </div>

        <div className="testimonial">
          <img src={p_8} alt="James" className="student-img" />
          <p className="testimonial-quote">"A fantastic place to unlock your creativity. I’ve learned techniques I never thought I could!"</p>
          <span className="student-name">- James G.</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
