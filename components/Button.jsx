import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const primary = [
    'text-white',
    'font-header',
    'text-baseLg',
    'p-2',
    'border-solid',
    'border-teal',
    'border-2',
    'bg-teal',
    'rounded',
    'hover:text-teal',
    'hover:border-white',
    'hover:bg-white',
];

const secondary = [
    'text-indigo',
    'text-baseLg',
    'p-2',
    'border-solid',
    'border-black',
    'border-2',
    'bg-black',
    'rounded',
    'hover:text-black',
    'hover:border-indigo',
    'hover:bg-indigo',
];

const Button = ({ btnText, btnUrl, isSecondary }) => {
    return (
        <Link href={btnUrl}>
            <button className={clsx(isSecondary ? secondary : primary)}>{btnText}</button>
        </Link>
    )
}

export default Button;
