import React from 'react';
import './Painting.css'; 
import { motion } from 'framer-motion';

import paint1 from '../../assets/Paintings/paint1.jpg';
import paint2 from '../../assets/Paintings/paint2.jpg';
import paint3 from '../../assets/Paintings/paint3.jpg';
import paint4 from '../../assets/Paintings/paint4.jpg';
import paint5 from '../../assets/Paintings/paint5.jpg';
import paint6 from '../../assets/Paintings/paint6.jpg';
import paint7 from '../../assets/Paintings/paint7.jpg';
import paint8 from '../../assets/Paintings/paint8.jpg';
import paint9 from '../../assets/Paintings/paint9.jpg';

const Painting = () => {
  const images = [
    { id: 'image1', src: paint1, title: 'Art Piece One', description: 'Description of Art Piece One.', additionalText: 'Additional info about Art Piece One.' },
    { id: 'image2', src: paint2, title: 'Art Piece Two', description: 'Description of Art Piece Two.', additionalText: 'Additional info about Art Piece Two.' },
    { id: 'image3', src: paint3, title: 'Art Piece Three', description: 'Description of Art Piece Three.', additionalText: 'Additional info about Art Piece Three.' },
    { id: 'image4', src: paint4, title: 'Art Piece Four', description: 'Description of Art Piece Four.', additionalText: 'Additional info about Art Piece Four.' },
    { id: 'image5', src: paint5, title: 'Art Piece Five', description: 'Description of Art Piece Five.', additionalText: 'Additional info about Art Piece Five.' },
    { id: 'image6', src: paint6, title: 'Art Piece Six', description: 'Description of Art Piece Six.', additionalText: 'Additional info about Art Piece Six.' },
    { id: 'image7', src: paint7, title: 'Art Piece Seven', description: 'Description of Art Piece Seven.', additionalText: 'Additional info about Art Piece Seven.' },
    { id: 'image8', src: paint8, title: 'Art Piece Eight', description: 'Description of Art Piece Eight.', additionalText: 'Additional info about Art Piece Eight.' },
    { id: 'image9', src: paint9, title: 'Art Piece Nine', description: 'Description of Art Piece Nine.', additionalText: 'Additional info about Art Piece Nine.' },
  ];

  return (
    <div id="galleryContainer">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          id={`galleryItem-${image.id}`}
          className="galleryItem"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.img 
            id={`galleryImage-${image.id}`} 
            src={image.src} 
            alt={image.title} 
            className="galleryImage" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
          />
          <div id={`galleryInfo-${image.id}`} className="galleryInfo">
            <h3 id={`imageTitle-${image.id}`} className="imageTitle">{image.title}</h3>
            <p id={`imageDescription-${image.id}`} className="imageDescription">{image.description}</p>
            <p id={`imageAdditionalText-${image.id}`} className="imageAdditionalText">{image.additionalText}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Painting;
