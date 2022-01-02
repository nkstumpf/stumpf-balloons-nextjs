import React from 'react';
import Link from 'next/link';
import { Camera, Facebook, Smile, Mail, User, Tool } from 'react-feather';
import clsx from 'clsx';

const footerStyles = [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'bg-indigo',
];

const divStyles = [
    'w-full',
    'max-w-screen-xl',
    'p-4',
    'bg-indigo',
    'text-white',
    'text-baseLg'
];

 const Footer = () => {
    return (
        <footer className={clsx(footerStyles)}>
            <div className={clsx(divStyles)}>
            <ul className="">
                <li className="flex mb-4">
                    <User className="mr-4" />
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li className="flex mb-4">
                    <Mail className="mr-4" />
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li className="flex mb-4">
                    <Smile className="mr-4" />
                    <Link href="/testimonials">
                        <a>Testimonials</a>
                    </Link>
                </li>
                <li className="flex mb-4">
                    <Tool className="mr-4" />
                    <Link href="/ask-the-repair-man">
                        <a>FAQs</a>
                    </Link>
                </li>
                <li className="flex mb-4">
                    <Camera className="mr-4" />
                    <Link href="/photo-blog">
                        <a>Paul's Photography</a>
                    </Link>
                </li>
                <li className="flex">
                    <Facebook className="mr-4" />
                    <a href="https://www.facebook.com/psstumpf">Follow Paul on Facebook</a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;
