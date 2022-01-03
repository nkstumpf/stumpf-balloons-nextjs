import clsx from 'clsx';
import React from 'react';

// variants:
// image right + text left
// image left + text right

const ContentBlock = ({ children, className, ...props }) => {
  return (
    <section className={clsx(className)} {...props}>
      {children}
    </section>
  );
};

export default ContentBlock;
