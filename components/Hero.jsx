import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@components/Button';
import clsx from 'clsx';

const containerStyles = [
    'mx-auto',
    'max-w-screen-xl',
    'max-h-[600px]',
    'overflow-hidden',
    'mb-8',
    'sm:rounded-lg',
];

const divStyles = [
    'absolute',
    'top-20',
    'left-0',
    'w-full',
    'h-full',
    'mx-auto',
    'p-4',
    'z-20',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'max-h-[600px]',
];

const headerStyles = [
    'w-full',
    'text-center',
    'text-headerLg',
    'font-header',
    'text-white',
    'p-4',
];

const Hero = ({imgSrc, imgAlt, headerText, withBtn, btnText, btnUrl}) => {
    return (
        <>
            <div className="h-20" />
            <section className={clsx(containerStyles)}>
                <picture className="w-full h-full relative z-10">
                    <img src={imgSrc} alt={imgAlt} width="100%" height="auto"/>
                </picture>
                <div className={clsx(divStyles)}>
                    <h1 className={clsx(headerStyles)}>{headerText}</h1>
                    {withBtn && (
                        <Button btnText={btnText} btnUrl={btnUrl} />
                    )}
                </div>
            </section>
        </>
    )
}

export default Hero;
