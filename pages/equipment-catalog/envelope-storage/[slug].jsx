import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Storyblok from '@/lib/storyblok';
import Header from '@/components/Header';
import Product from '@/components/Product';
import Footer from '@/components/Footer';

const ProductPage = ({ story }) => {
  const { content } = story;

  const headData = {
    title: 'Home',
    ogTitle: 'Home',
    ogUrl: 'https://www.stumpfballoons.com/equipment-catalog/envelope-storage',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription: 'Hot air ballooning equipment - envelope storage',
    canonicalUrl: 'https://www.stumpfballoons.com/equipment-catalog/envelope-storage',
  };

  return (
    <>
    <Head>
        <title>{`${headData.ogTitle} | Stumpf Balloons`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={headData.ogDescription} />
        <meta
          property="og:title"
          content={`${headData.ogTitle} | Stumpf Balloons`}
        />
        <meta property="og:url" content={headData.ogUrl} />
        <meta property="og:image" content={headData.ogImage} />
        <meta property="og:type" content={headData.ogType} />
        <meta property="og:description" content={headData.ogDescription} />
        <link rel="canonical" href={headData.canonicalUrl} />
      </Head>
      <main id="maincontent" className="bg-white">
        <Header />
        <Product content={content} />
      </main>
      <Footer />
    </>
  );
}

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
    version: "draft", // or published
  };

  let { data } = await Storyblok.get(`cdn/stories/equipment-catalog/envelope-storage/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      slug: slug
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default ProductPage;
