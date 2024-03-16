// Level.jsx

import React, { useState } from 'react';
import styles from './Level.module.css';

const images = [
  {
    url: 'images/background/bg2.avif',
    name: 'Level 1',
    description: 'Start',
  },
  {
    url: 'images/background/bg.jpg',
    name: 'Level 2',
    description: 'Complete Level 1 First',
  },
  {
    url: 'images/background/bg3.avif',
    name: 'Level 3',
    description: 'Complete Level 2 First',
  },
];

const Level = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const currentImageInfo = images[currentImage];

  return (
    <>
    <div className={styles.carousel}>
      <div className={styles.imageInfo}>
        <h1>{currentImageInfo.name}</h1>
        <a href='/game'>{currentImageInfo.description}</a>
      </div>
      <div className={styles.carouselWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentImage ? styles.active : ''
            }`}
          >
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <img src='images/character/tools/arrow-prev.png' onClick={prevImage} className={styles.prevButton}  />
        
        <img src='images/character/tools/arrow-next.png' onClick={nextImage} className={styles.nextButton} />
        
      </div>
    </div>

    <a href="/"><img src="images/character/arrow-left.png" className={styles.arrow} /></a>

    </>
  );
};

export default Level;
