import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// variant styles:

// image above text
const imgAboveText = [

];

// image right + text left
const imgRight= [

];

// image left + text right
const imgLeft = [

];

// no image text only
const textOnly = [

];

const ContentBlock = ({ variant, children, className, ...props }) => {
  return (
    <section className={clsx(className)} {...props}>
      {children}
    </section>
  );
};

ContentBlock.propTypes = {
  children: PropTypes.node.isRequired
};

ContentBlock.Image = ({ src, alt, className, ...props }) => {
  return (
    <img src={src} alt={alt} className={clsx(className)} {...props} />
  );
};

ContentBlock.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

ContentBlock.Content = ({ children, className, ...props }) => {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

ContentBlock.Content.propTypes = {
  children: PropTypes.node.isRequired
};


export default ContentBlock;
