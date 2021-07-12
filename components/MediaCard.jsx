import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const MediaCard = ({
  active,
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx('w-80', 'bg-white', 'rounded-lg', 'pb-4', 'shadow-xl', 'md:inline-block', className, (active ? '' : 'hidden'))} {...props}>
      {children}
    </div>
  );
};

MediaCard.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

MediaCard.Image = ({ src, alt, className, ...props }) => {
  return (
    <img className={clsx('object-fill', 'rounded-t-lg', className)} src={src} alt={alt} {...props} />
  );
};

MediaCard.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

MediaCard.Content = ({ children, className, ...props }) => {
  return (
    <div className={clsx('p-4', 'text-base', className)} {...props}>{children}</div>
  );
};

MediaCard.Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

MediaCard.Heading = ({ children, className, ...props }) => {
  return (
    <p className={clsx('text-leadLg', 'md:h-14', 'mb-0', 'md:mb-4', className)} {...props}>{children}</p>
  );
};

MediaCard.Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

MediaCard.SubHeading = ({ children, className, ...props }) => {
  return (
    <p className={clsx('text-baseLg', 'md:h-14', className)} {...props}>{children}</p>
  );
};

MediaCard.SubHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

MediaCard.Body = ({ children, className, ...props }) => {
  return (
    <div className={clsx('text-base', className)} {...props}>{children}</div>
  );
};

MediaCard.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default MediaCard;
