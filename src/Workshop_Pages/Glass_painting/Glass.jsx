import React from 'react';
import { motion } from 'framer-motion';
import './Glass.css';
import paint1 from '../../assets/Paintings/paint1.jpg';
import paint2 from '../../assets/Paintings/paint2.jpg';
import paint3 from '../../assets/Paintings/paint3.jpg';
import paint4 from '../../assets/Paintings/paint4.jpg';
import paint5 from '../../assets/Paintings/paint5.jpg';
import paint6 from '../../assets/Paintings/paint6.jpg';
import paint7 from '../../assets/Paintings/paint7.jpg';

const Glass = () => {
  const artworks = [
    {id: 1, src: paint1, alt: 'Art 1', description: 'A breathtaking sunset over mountain peaks.' },
    {id: 2, src: paint2, alt: 'Art 2', description: 'A peaceful river flowing through dense forest.' },
    {id: 3, src: paint3, alt: 'Art 3', description: 'A vibrant cityscape under the moonlight.' },
    {id: 4, src: paint4, alt: 'Art 4', description: 'A calm beach with soft waves and golden sand.' },
    {id: 5, src: paint5, alt: 'Art 5', description: 'A colorful field of wildflowers in bloom.' },
    {id: 6, src: paint6, alt: 'Art 6', description: 'A leaf with intricate details and textures.' },
    {id: 7, src: paint7, alt: 'Art 7', description: 'An abstract painting with bold colors and shapes.' }
  ];

  return (
    <div id="art-page-container">
      <motion.div
        id="art-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 id="title">Stunning Glass Paintings</h1>
        <p id="description">
          Experience the elegance of glass paintings, where vibrant colors blend seamlessly with nature.
        </p>
      </motion.div>

      {artworks.map((artwork, index) => (
        <motion.div
          key={artwork.id}
          id={`art-row-${artwork.id}`}
          style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '20px'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }} 
        >
          <motion.img
            id={`image${artwork.id}`}
            src={artwork.src}
            alt={artwork.alt}
            style={{
              width: '48%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
            }}
          />
          <motion.div id={`description-container-${artwork.id}`} style={{ width: '52%' }}>
            <motion.p
              id={`image-description${artwork.id}`}
              style={{
                fontSize: '1.3rem',
                color: '#555',
                lineHeight: '1.6',
                textAlign: index % 2 === 0 ? 'left' : 'right', // creative alignment
                fontFamily: `'Dancing Script', cursive` // added creative font
              }}
            >
              {artwork.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Glass;
