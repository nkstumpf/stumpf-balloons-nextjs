import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';

const Hero = ({mediaSrc, headerText, withBtn, btnText, btnUrl}) => {
  return (
    <>
      <section className="flex justify-center items-center h-[300px] sm:h-[600px] w-inherit mb-8">
        <div className="w-full h-[300px] sm:h-[600px] flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${mediaSrc})` }}>
          <h1 className="text-center text-headerLg font-header text-white p-4">{headerText}</h1>
          {withBtn && (
            <Button btnText={btnText} btnUrl={btnUrl} />
          )}
        </div>
      </section>
    </>
  );
};

Hero.propTypes = {
  mediaSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  headerText: PropTypes.string,
  withBtn: PropTypes.bool,
  btnText: PropTypes.string,
  btnUrl: PropTypes.string
};

export default Hero;
