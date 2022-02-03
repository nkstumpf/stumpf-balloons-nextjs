import React from 'react';
import clsx from 'clsx';

const styles = [
  'mx-auto',
  'max-w-screen-xl',
  'mb-8',
  'flex',
  'flex-wrap',
  'justify-evenly'
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

export default Gallery;
