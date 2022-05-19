import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'storyblok-rich-text-react-renderer';
import Carousel from './Carousel';

const Product = ({ content, ...props }) => {
  // if the product has color options:
  let colorNames = [];
  if(content.available_colors.length > 0) {
    content.available_colors.forEach(color => {
      colorNames.push(color);
    });
  }

  return (
    <section className="mx-auto max-w-screen-xl mb-8 p-8" {...props}>
      <Carousel images={content.images}/>
      <h1>{content.name}</h1>
      <p>${content.price}</p>
      <p>{render(content.description)}</p>
      <h2>Available Colors:</h2>
      <ul>
        {colorNames.map(color => {
          return <li key={color}>{color}</li>;
        })}
      </ul>
      <p>{content.color_details}</p>
      <p>{content.size}</p>
      <p>{content.additional_options}</p>
    </section>
  );
};

Product.propTypes = {
  content: PropTypes.object,
};

export default Product;
