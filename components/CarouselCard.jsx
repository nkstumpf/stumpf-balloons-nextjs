import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = ({ active, imgSrc, imgAlt, caption }) => {
  return (
    <div className={`fade ${active ? '' : 'hidden'}`}>
      <div>
        <img src={imgSrc} alt={imgAlt} width="100%" height="auto" />
      </div>
      {caption && (
        <p className="">{caption}</p>
      )}
    </div>
  );
};

CarouselCard.propTypes = {
  active: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  caption: PropTypes.string
};

export default CarouselCard;
