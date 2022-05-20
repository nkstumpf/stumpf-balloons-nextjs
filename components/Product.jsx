import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'storyblok-rich-text-react-renderer';
import Carousel from './Carousel';

const Product = ({ content }) => {

  return (
    <section className="mx-auto max-w-screen-xl mb-8 p-8 flex flex-col gap-8">
      <h1>{content.name}</h1>
      <Carousel images={content.images}/>
      <p className="">${content.price}</p>
      <p>{render(content.description)}</p>
      <p>{content.dimensions}</p>
    </section>
  );
};

Product.propTypes = {
  content: PropTypes.object,
};

export default Product;
