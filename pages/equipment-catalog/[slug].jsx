import React from 'react';
import Storyblok from '@/lib/storyblok';

const ProductPage = ({ story }) => {
  const { content } = story;
  // console.log(content.available_colors);

  return (
    <div>
      <h1>{content.name}</h1>
      <p>{content.price}</p>
      <p>{content.description}</p>
      <p>{content.shipping_weight}</p>
      <p>{content.sku}</p>
      <h2>Available Colors:</h2>
      <ul>
      {content.available_colors && (
        content.available_colors.map(color => (
        <li>{color}</li>
        )
        ))}
      </ul>
      <img src={content.images[0].filename} alt={content.name} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug;

  let sbParams = {
    version: "draft", // or published
  };

  let { data } = await Storyblok.get(`cdn/stories/products/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      slug: slug
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  // get all links
  let { data } = await Storyblok.get('cdn/links/');

  let paths = [];
  // create a route for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders or the home (index) page
    // but what if I want to use nested folders in pages directory of nextjs project?
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "/") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    // creates all the routes
    paths.push({ params: { slug: splittedSlug[splittedSlug.length-1] } });

  });

  const uniquePaths = [...new Set(paths)];
  const uniquePathsArr = uniquePaths.filter(path => {
    if(path.params.slug !== '') {
      return path.params.slug;
    }
  });

  return {
    paths: uniquePathsArr,
    fallback: false,
  };
}


export default ProductPage;
