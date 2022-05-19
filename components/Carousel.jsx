import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselCard from './CarouselCard';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({images}) => {
  const [activeCard, setActiveCard] = useState(0);

  images.forEach((image, i) => {
    return i === activeCard ? image.isActive = true : image.isActive = false;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {images.map((image, i) => {
        return (
          <CarouselCard
            key={image.id}
            active={images[i].isActive}
            imgSrc={image.filename}
            imgAlt={image.alt}
          />
        );
      })}
      {images.length > 1 && (
        <div className="flex gap-4">
          <ChevronLeft className="icon" onClick={() => setActiveCard(activeCard - 1)} />
          <p className="slider-number">{activeCard +1 } / {images.length}</p>
          <ChevronRight className="icon" onClick={() => setActiveCard(activeCard + 1)} />
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};

export default Carousel;
