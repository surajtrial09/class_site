import React from 'react';
import './Classes.css'; // Assuming there's a CSS file for styling
import im1 from '../../assets/classes/classes1.avif';
import im2 from '../../assets/classes/classes2.avif';
import im3 from '../../assets/classes/classes3.avif';
import teacher from '../../assets/classes/teacher.avif';
import gall from '../../assets/classes/gall.jpeg';
import gall2 from '../../assets/classes/gall2.jpeg';
import gall3 from '../../assets/classes/gall3.jpeg';


const Classes = () => {
  return (
    <div id="classesPage" className="container py-4">
      {/* 1. Class Categories and Descriptions */}
      <sectionclas id="classCategories" className="mt-4">
        <h2>Explore Our Art Classes</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div id="paintingCard" className="card h-100">
              <img src={im1} className="card-img-top" alt="Painting Classes" />
              <div className="card-body">
                <h4 className="card-title">Painting Classes</h4>
                <p className="card-text">Explore watercolor, oil, acrylic, and gouache techniques for all levels.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div id="drawingCard" className="card h-100">
              <img src={im2} className="card-img-top" alt="Drawing and Sketching" />
              <div className="card-body">
                <h4 className="card-title">Drawing and Sketching</h4>
                <p className="card-text">Learn basics to advanced skills in pencil, charcoal, ink, and pastels.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div id="digitalArtCard" className="card h-100">
              <img src={im3} className="card-img-top" alt="Digital Art" />
              <div className="card-body">
                <h4 className="card-title">Clay work</h4>
                <p className="card-text">In Our classes, where you'll learn to shape, sculpt, and glaze clay to create beautiful pottery and decorative items. </p>
              </div>
            </div>
          </div>
        </div>
      </sectionclas>

      {/* 2. Levels of Instruction */}
      <sectionclas id="instructionLevels" className="mt-4">
        <h2>Levels of Instruction</h2>
        <div className="card p-3">
          <ul>
            <li><strong>Beginner Classes:</strong> For those new to art, focusing on foundational skills and techniques.</li>
            <li><strong>Intermediate Classes:</strong> For students with some experience, building on existing skills.</li>
            <li><strong>Advanced Classes:</strong> Masterclasses for honing skills and exploring complex techniques.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 3. Schedule and Timings */}
      <sectionclas id="classSchedule" className="mt-4">
        <h2>Class Schedule and Timings</h2>
        <div className="card p-3">
          <p>Find the perfect class that fits your schedule:</p>
          <ul>
            <li><strong>Weekly Schedule:</strong> Classes are held on weekdays at various times.</li>
            <li><strong>Weekend Workshops:</strong> Intensive weekend sessions for focused learning.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 4. Instructor Profiles */}
      <sectionclas id="instructorProfiles" className="mt-4">
        <h2>Meet Our Instructors</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div id="instructor1Card" className="card h-100 text-center">
              <img src={teacher} className="card-img-top" alt="Instructor 1" />
              <div className="card-body">
                <h4>John Doe</h4>
                <p>Expert in Painting, Sculpture and Paper Craft with 10+ years of experience.</p>
                <p>Scholar in Madhubani & Advanced Arts.</p>
              </div>
            </div>
          </div>
        </div>
      </sectionclas>

      {/* 5. Class Formats */}
      <sectionclas id="classFormats" className="mt-4">
        <h2>Class Formats</h2>
        <div className="card p-3">
          <ul>
            <li><strong>In-Studio Classes:</strong> Conducted in a studio environment with materials provided.</li>
            <li><strong>Online Classes:</strong> Live or recorded sessions for at-home learning.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 6. Materials Needed */}
      <sectionclas id="materialsNeeded" className="mt-4">
        <h2>Materials Needed</h2>
        <div className="card p-3">
          <p>Students are required to bring basic art supplies like brushes, paints, and canvases. Specific requirements will be provided for each class.</p>
        </div>
      </sectionclas>

      {/* 7. Student Work Gallery */}
      <sectionclas id="studentGallery" className="mt-4">
        <h2>Student Work Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gall3} alt="Student Work 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall} alt="Student Work 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={gall2} alt="Student Work 3" className="img-fluid rounded" />
          </div>
        </div>
      </sectionclas>

      {/* 8. Special Programs */}
      <sectionclas id="specialPrograms" className="mt-4">
        <h2>Special Programs</h2>
        <div className="card p-3">
          <ul>
            <li><strong>Seasonal Camps:</strong> Summer and winter art camps for all ages.</li>
            <li><strong>Portfolio Preparation:</strong> Classes aimed at students applying to art schools.</li>
          </ul>
        </div>
      </sectionclas>

      {/* 9. Enrollment Details */}
      <sectionclas id="enrollmentDetails" className="mt-4">
        <h2>Enrollment Details</h2>
        <div className="card p-3">
          <p>To enroll, please fill out the online form or visit our studio. Fees are non-refundable. Contact us for more information on class availability and schedules.</p>
        </div>
      </sectionclas>

      {/* 10. Testimonials */}
      <sectionclas id="testimonials" className="mt-4">
        <h2>What Our Students Say</h2>
        <div className="card p-3">
          <blockquote className="blockquote">
            <p>"The painting class helped me discover my artistic potential. The instructors are fantastic!"</p>
            <footer className="blockquote-footer">Sarah, Beginner Student</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"I loved the all art sessions. The skills I learned are invaluable."</p>
            <footer className="blockquote-footer">Michael, Intermediate Student</footer>
          </blockquote>
        </div>
      </sectionclas>
    </div>
  );
};

export default Classes;
