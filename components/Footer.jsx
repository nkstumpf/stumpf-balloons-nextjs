import React from 'react';
import Link from 'next/link';
import { Camera, Facebook, Mail, User } from 'react-feather';
import clsx from 'clsx';

const footerStyles = [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'bg-white',
];

const divStyles = [
    'w-full',
    'max-w-screen-xl',
    'p-4',
    'bg-white',
    'text-black',
    'text-baseLg',
    'font-header',
];

 const Footer = () => {
    return (
        <footer className={clsx(footerStyles)}>
            <div className={clsx(divStyles)}>
                <ul className="">
                    <li className="flex items-center mb-4">
                        <Facebook className="mr-4" />
                        <a href="https://www.facebook.com/psstumpf">Follow Paul on Facebook</a>
                    </li>
                    <li className="flex items-center mb-4">
                        <User className="mr-4" />
                        <Link href="/about">
                            <a>About Paul</a>
                        </Link>
                    </li>
                    <li className="flex items-center mb-4">
                        <Mail className="mr-4" />
                        <Link href="/contact">
                            <a>Contact Info</a>
                        </Link>
                    </li>
                    <li className="flex items-center mb-4">
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
