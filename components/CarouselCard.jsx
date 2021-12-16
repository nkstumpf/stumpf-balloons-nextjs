import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    backgroundColor: 'black',
    color: 'white'
};

const CarouselCard = ({
    active,
    imgSrc,
    imgAlt,
    caption,
    className,
    ...props
}) => {
    return (
        <div className={`fade ${active ? '' : 'hidden'}`}>
            <div className="img-container">
                <img src={imgSrc} alt={imgAlt} width="100%" height="auto" />
            </div>
            <p className="caption" style={styles}>{caption}</p>
        </div>
    );
};

export default CarouselCard;
