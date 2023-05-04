import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Storyblok from '@/lib/storyblok';
import Header from '@components/Header';
import Product from '@components/Product';
import Footer from '@components/Footer';

const ProductPage = ({ story }) => {
  const { content } = story;

  const metaData = {
    title: `Stumpf Balloons & Banners | ${content.category} | ${content.name}`,
    canonicalUrl: `https://www.stumpfballoons.com/equipment-catalog/${content.category}/${content.name}`,
    ogUrl: `https://www.stumpfballoons.com/equipment-catalog/${content.category}/${content.name}`,
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription: `Stumpf Balloons Hot air ballooning equipment & Banners | ${content.category} | ${content.name}`,
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metaData.canonicalUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaData.ogDescription} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:url" content={metaData.ogUrl} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:type" content={metaData.ogType} />
        <meta property="og:description" content={metaData.ogDescription} />
      </Head>
      <Header />
      <main>
        <Product content={content} />
      </main>
      <Footer />
    </>
  );
};

ProductPage.propTypes = {
  story: PropTypes.object,
};

export async function getStaticPaths() {

  let { data } = await Storyblok.get('cdn/links/?starts_with=equipment-catalog/envelope-storage/');

  const paths = Object.keys(data.links).map((linkKey) => {

    return { params: { slug: data.links[linkKey].slug.replace('equipment-catalog/envelope-storage/', '')}};

  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let slug = params.slug;

  let sbParams = {
    version: 'draft'
  };

  let { data } = await Storyblok.get(`cdn/stories/equipment-catalog/envelope-storage/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      slug: slug
    }
  };
}

export default ProductPage;
