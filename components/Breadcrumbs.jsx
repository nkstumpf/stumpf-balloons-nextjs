import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';

const Breadcrumbs = ({ links = [] }) => {
  return (
    <nav className="mb-4" >
      <ol className="flex gap-2">
        <li className="flex items-center gap-2">
          <HiHome />
          <Link href="/">
            Home
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.name} className="flex items-center gap-2">
            <HiChevronRight />
            <Link href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
};

export default Breadcrumbs;
