import React from 'react';
import './Mosaic.css'; 
import paint1 from '../../assets/Paintings/paint1.jpg'
import paint2 from '../../assets/Paintings/paint2.jpg'
import paint3 from '../../assets/Paintings/paint3.jpg'
import paint4 from '../../assets/Paintings/paint4.jpg'
import paint5 from '../../assets/Paintings/paint5.jpg'
import paint6 from '../../assets/Paintings/paint6.jpg'
import paint7 from '../../assets/Paintings/paint7.jpg'
import paint8 from '../../assets/Paintings/paint8.jpg'
import paint9 from '../../assets/Paintings/paint9.jpg'




const Mosaic = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Mosaic art</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {/* First card */}
        <div className="col" >
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint1}
              alt="Painting 1"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Second card */}
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover" >
            <img
              src={paint2}
              alt="Painting 2"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint3}
              alt="Painting 1"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Second card */}
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint4}
              alt="Painting 2"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint5}
              alt="Painting 1"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Second card */}
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint6}
              alt="Painting 2"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint7}
              alt="Painting 1"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Second card */}
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint8}
              alt="Painting 2"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Third card */}
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg chover">
            <img
              src={paint9}
              alt="Painting 3"
              className="card-img"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;

