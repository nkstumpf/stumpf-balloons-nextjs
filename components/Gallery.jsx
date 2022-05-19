import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const styles = [
  'mx-auto',
  'max-w-screen-xl',
  'mb-8',
  'flex',
  'flex-wrap',
  'justify-center',
  'gap-4'
];

const Gallery = ({ title, children, className, ...props }) => {
  return (
    <section className={className} {...props}>
      <p className="mb-8 text-center text-header">{title}</p>
      <div className={clsx(styles, className)}>
        {children}
      </div>
    </section>
  );
};

Gallery.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Gallery;
