import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'storyblok-rich-text-react-renderer';
import Carousel from '@components/Carousel';
import Button from '@components/Button';

const Product = ({ content }) => {

  return (
    <section className="mx-auto max-w-screen-xl mb-8 p-8 flex flex-col gap-8">
      <h1>{content.name}</h1>
      <Carousel images={content.images}/>
      <p>${content.price}</p>
      <div>{render(content.description)}</div>
      <p>{content.dimensions}</p>
      <Button btnText="Order Now" btnUrl="/contact" btnStyle='dark'/>
    </section>
  );
};

Product.propTypes = {
  content: PropTypes.object,
};

export default Product;
