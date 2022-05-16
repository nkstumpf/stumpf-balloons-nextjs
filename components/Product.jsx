import React from "react";
import PropTypes from 'prop-types';

const Product = ({ content, ...props }) => {
  // if the product has color options:
  let colorNames = [];
  if(content.available_colors.length > 0) {
    content.available_colors.forEach(color => {
      colorNames.push(color);
    });
  }
  return (
    <section {...props}>
      <h1>{content.name}</h1>
      <p>${content.price}</p>
      <p>{content.description}</p>
      <h2>Available Colors:</h2>
      <ul>
        {colorNames.map(color => {
          return <li key={color}>{color}</li>;
        })}
      </ul>
      <p>{content.color_details}</p>
      <img src={content.images[0].filename} alt={content.name} />
      <p>{content.size}</p>
      <p>{content.additional_options}</p>
    </section>
  );
};

Product.propTypes = {
  content: PropTypes.object,
};

export default Product;
