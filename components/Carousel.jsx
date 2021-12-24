import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const Carousel = ({children}) => {
  return (
    <div style={styles}>
        {children}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;
