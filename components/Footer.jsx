import React from 'react';
import Link from 'next/link';
import { Camera, Facebook, Mail, User } from 'react-feather';
import clsx from 'clsx';

const footerStyles = [
  'w-full',
  'flex',
  'flex-col',
  'items-center',
  'bg-black'
];

const divStyles = [
  'w-full',
  'flex',
  'flex-col',
  'gap-4',
  'sm:flex-row',
  'justify-between',
  'max-w-screen-xl',
  'p-8',
  'text-white',
  'text-base',
  'font-header'
];

const Footer = () => {
  return (
    <footer className={clsx(footerStyles)}>
      <div className={clsx(divStyles)}>
        <ul className="">
          <li className="flex items-center mb-4 hover:text-teal">
            <Facebook className="mr-4" />
            <a href="https://www.facebook.com/psstumpf">Follow Paul on Facebook</a>
          </li>
          <li className="flex items-center mb-4 hover:text-teal">
            <User className="mr-4" />
            <Link href="/about">
              <a>About Paul</a>
            </Link>
          </li>
          <li className="flex items-center mb-4 hover:text-teal">
            <Mail className="mr-4" />
            <Link href="/contact">
              <a>Contact Info</a>
            </Link>
          </li>
          <li className="flex items-center mb-4 hover:text-teal last:mb-0">
            <Camera className="mr-4" />
            <Link href="/photo-blog">
              <a>Paul's Photography</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center border-t sm:border-none pt-4 sm:pt-0">
          <p className="mr-4">&copy;</p>
          <p>Stumpf Balloons & Banners {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
