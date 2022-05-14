import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Camera, Facebook, Mail, User } from 'react-feather';
import clsx from 'clsx';

const footerStyles = [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
];

const divStyles = [
    'w-full',
    'max-w-screen-xl',
    'p-4',
    'text-black',
    'text-baseLg',
    'font-header',
    'border-t-2'
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
                    <li className="flex items-center mb-4 hover:text-teal">
                        <Camera className="mr-4" />
                        <Link href="/photo-blog">
                            <a>Paul's Photography</a>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <p className="mr-4">&copy;</p>
                        <p>Stumpf Balloons & Banners {new Date().getFullYear()}</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
