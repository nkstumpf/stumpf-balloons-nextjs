import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';

const primary = [
    'text-white',
    'font-header',
    'text-baseLg',
    'p-2',
    'bg-gradient-to-r',
    'from-indigo',
    'to-teal',
    'rounded',
    'hover:text-black',
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
