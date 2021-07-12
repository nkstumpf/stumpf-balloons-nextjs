import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = ({
  heading,
  tagline,
  children
}) => {
  return (
    <section className="flex flex-col container py-12 items-center justify-center">
      <div className="w-80 md:w-full pt-12 mb-0">
        <div className="mb-4">
          <div className="text-center md:text-left mb-4">
            <h2 className="text-red text-sm font-bold m-0 uppercase">{tagline}</h2>
            <h1 className="text-blue-dark text-h2">{heading}</h1>
          </div>
          <div className="flex flex-col items-stretch justify-center lg:justify-start md:flex-row md:space-x-4 md:space-y-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default CardContainer;
