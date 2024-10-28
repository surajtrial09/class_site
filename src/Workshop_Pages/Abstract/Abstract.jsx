import React from 'react';
import './Abstract.css'; 
import { motion } from 'framer-motion';

import paint1 from '../../assets/Paintings/paint1.jpg'
import paint2 from '../../assets/Paintings/paint2.jpg'
import paint3 from '../../assets/Paintings/paint3.jpg'
import paint4 from '../../assets/Paintings/paint4.jpg'
import paint5 from '../../assets/Paintings/paint5.jpg'
import paint6 from '../../assets/Paintings/paint6.jpg'
import paint7 from '../../assets/Paintings/paint7.jpg'
import paint8 from '../../assets/Paintings/paint8.jpg'
import paint9 from '../../assets/Paintings/paint9.jpg'

const Abstract = () => {
  const images = [
    {
      id: 'image1',
      src: paint1,
      title: 'Art Piece One',
      description: 'This is a description of Art Piece One.',
      additionalText: 'This is additional information about Art Piece One. It discusses the inspiration behind the artwork, techniques used, and other interesting details.',
    },
    {
      id: 'image2',
      src: paint2,
      title: 'Art Piece Two',
      description: 'This is a description of Art Piece Two.',
      additionalText: 'This is additional information about Art Piece Two. It highlights the artist’s vision, challenges encountered, and significance of the artwork.',
    },
    {
      id: 'image3',
      src: paint3,
      title: 'Art Piece Three',
      description: 'This is a description of Art Piece Three.',
      additionalText: 'This is additional information about Art Piece Three. It gives an insight into the story behind the piece and the emotions it aims to convey.',
    },
    {
      id: 'image3',
      src: paint3,
      title: 'Art Piece Three',
      description: 'This is a description of Art Piece Three.',
      additionalText: 'This is additional information about Art Piece Three. It gives an insight into the story behind the piece and the emotions it aims to convey.',
    },
    {
      id: 'image3',
      src: paint3,
      title: 'Art Piece Three',
      description: 'This is a description of Art Piece Three.',
      additionalText: 'This is additional information about Art Piece Three. It gives an insight into the story behind the piece and the emotions it aims to convey.',
    },
    {
      id: 'image3',
      src: paint3,
      title: 'Art Piece Three',
      description: 'This is a description of Art Piece Three.',
      additionalText: 'This is additional information about Art Piece Three. It gives an insight into the story behind the piece and the emotions it aims to convey.',
    },
    
  ];

  return (
    <div id="galleryContainer">
      {images.map((image) => (
        <motion.div
          key={image.id}
          id={`galleryItem-${image.id}`}
          className="galleryItem"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img id={`galleryImage-${image.id}`} src={image.src} alt={image.title} className="galleryImage" />
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

export default Abstract;



