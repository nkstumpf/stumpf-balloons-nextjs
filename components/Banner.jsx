import React from 'react';
import PropTypes from 'prop-types';
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

Banner.propTypes = {
    btnText: PropTypes.string,
    btnUrl: PropTypes.string,
    snapLink: PropTypes.string
};

export default Banner;
