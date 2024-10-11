import React, { useEffect } from 'react';
import './Curriculam.css';
import small_std from '../../assets/small_child.jpg';
import mod_std from '../../assets/moderate_child.jpg';
import senior from '../../assets/exp_student.jpg'
import senior_exp from '../../assets/seno.jpg'
import brush_shade from '../../assets/brush_shade.png';


const Curriculam = () => {

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.featurette-image');
      const windowHeight = window.innerHeight;

      images.forEach((image, index) => {
        const imageTop = image.getBoundingClientRect().top;
        if (imageTop < windowHeight - 100) {
          if (index % 2 === 0) {
            image.classList.add('slide-left');  // Slide from left for even index
          } else {
            image.classList.add('slide-right'); // Slide from right for odd index
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main id='main_margin'>
      <hr className="featurette-divider" />
      <h1 className="headin">
        <span className="brush-overlay">
          <img src={brush_shade} alt="Brush Shade" className="brush-shade" />
          Curriculam
        </span>
      </h1>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Junior Begineer(4-8 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <ul>
              <li>Understanding of Lines and Pattern</li>
              <li>Understanding of Shapes and Form</li>
              <li>Introduction to Abstract</li>
              <li>Curved Line and Pattern</li>
            </ul>
            <h5>And Gradually Move to</h5>
            <ul>
              <li>Colour Study, Shading and Bleending</li>
              <li>Handling of Point, Brushes and Colours</li>
              <li>Study of Curve line object</li>
              <li>Motor Skill development Activity using form of Art</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration: 1 Year</span><span className="text-body-secondary">No. Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5">
          <img
            src={small_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Junior Learner(9-15 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <h5>The Children are Ready to Learn these Things</h5>
            <ul>
              <li>Basics of pencil sketching and shading</li>
              <li>Basics of live object drawing</li>
              <li>Basics of watercolours and poster colours</li>
              <li>Still life drawing</li>
              <li>Composite drawing</li>
              <li>Styles of various art masters-art history</li>
              <li>Basics of glass paints, colour pencils, soft pastels</li>
              <li>Traditional Art, Mahbubani Art, etc.</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration: 1 Year</span><span className="text-body-secondary">No. Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={mod_std}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Senior Seeker(12-15 Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <h5>The Children are Ready to Learn these Things</h5>
            <ul>
              <li>Basic Knowledge of Painting</li>
              <li>Introduction of Mixed Media Arts</li>
              <li>Introduction of Different types of Clay Arts</li>
              <li>Traditional Art-Basic Worli, Mithila, Gond Arts</li>
              <li>Advanced Glass Painting, Acrylics, Colour Pencils</li>
              <li>Fabric Painting and Lippan Art</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration: 1 Year</span><span className="text-body-secondary">No. Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={senior_exp}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Senior Expressors(16+ Years) <span className="text-body-secondary">Course Start With</span></h2>
          <p className="lead">
            <h5>Students have the necessary Knowledge of Art</h5>
            <ul>
              <li>Different types of Canvas Painting</li>
              <li>Pencil Shading with help of Shading tools</li>
              <li>Grid Knowledge</li>
              <li>Soft Pastel Painting</li>
              <li>Knife Painting</li>
              <li>Fabric Painting</li>
              <li>Clay Work with Hand</li>
              <li>Origami Arts and Various type of Craft Work</li>
            </ul>
            <h5><span className="text-body-secondary">Course Duration: 1 Year</span><span className="text-body-secondary">No. Of Sessions: 96</span></h5>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={senior}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Featurette"
            width="500"
            height="500"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
    </main>
  );
};

export default Curriculam;
