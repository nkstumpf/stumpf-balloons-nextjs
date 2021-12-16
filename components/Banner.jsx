import React from 'react';
import Button from '@components/Button';
import { ArrowDownCircle } from 'react-feather';

const Banner = ({btnText, btnUrl, snapLink}) => {
    return (
        <div>
        <Button btnText={btnText} btnUrl={btnUrl} btnStyle='light' />
        <a href={snapLink}><ArrowDownCircle /></a>
        </div>
    )
}

export default Banner;
