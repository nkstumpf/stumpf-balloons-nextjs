import clsx from 'clsx';
import React from 'react';

const Gallery = ({ children, className, ...props }) => {
  return (
    <section {...props}>
      <h1 className="mb-8 text-center text-header">Gallery Example...</h1>
      <div className={clsx(className)}>
        {children}
      </div>
    </section>
  );
};

export default Gallery;
