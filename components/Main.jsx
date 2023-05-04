import React from 'react';
import PropTypes from 'prop-types';

// add css


const Main = ({ id, children, ...props }) => {

  return (
    <main id={id} className={classes} {...props}>
      {children}
    </main>
  );
};


Main.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.bool
};

Main.defaultProps = {
  id: 'maincontent',
  container: true
};

export default Main;
