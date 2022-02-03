import React from 'react';
import Storyblok from '@/lib/storyblok';

const ProductPage = ({ story }) => {
  const { content } = story;

  const colorNames = content.available_colors = content.available_colors.map(color => {
    return color
  });

  return (
    <div>
      <h1 className="text-emerald">{content.name}</h1>
      <p>${content.price}</p>
      <p>{content.description}</p>
      <h2>Available Colors:</h2>
      {colorNames.map(color => {
        return <p>{color}</p>;
      })}
      <p>{content.color_details}</p>
      <img src={content.images[0].filename} alt={content.name} />
      <p>{content.size}</p>
      <p>{content.additional_options}</p>
    </div>
  );
}

export async function getStaticPaths() {

  let { data } = await Storyblok.get('cdn/links/?starts_with=equipment-catalog/envelope-storage/');

  const paths = Object.keys(data.links).map((linkKey) => {

     return { params: { slug: data.links[linkKey].slug.replace('equipment-catalog/envelope-storage/', '')}};

  });

  console.log(paths);

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  let slug = params.slug;

  let sbParams = {
    version: "draft", // or published
  };

  let { data } = await Storyblok.get(`cdn/stories/equipment-catalog/envelope-storage/${slug}`, sbParams);

  console.log(data);

  return {
    props: {
      story: data ? data.story : null,
      slug: slug
    },
    revalidate: 3600, // revalidate every hour
  };
};

export default ProductPage;
