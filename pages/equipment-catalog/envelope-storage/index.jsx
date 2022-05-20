import React from 'react';
import PropTypes from 'prop-types';
import Storyblok from '@/lib/storyblok';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import GalleryTile from '@/components/GalleryTile';

const EnvelopeStorage = ({ story, products }) => {
  const { content } = story;

  const headData = {
    title: `Stumpf Balloons - ${content.page_name}`,
    ogTitle: `Stumpf Balloons - ${content.page_name}`,
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription:'Hot air ballooning envelope storage, balloon envelope bags, storage solutions',
    canonicalUrl: 'https://www.stumpfballoons.com',
  };

  return (
    <>
      <Head>
        <title>{`${headData.ogTitle} | Stumpf Balloons`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={headData.ogDescription} />
        <meta property="og:title" content={`${headData.ogTitle} | Stumpf Balloons`} />
        <meta property="og:url" content={headData.ogUrl} />
        <meta property="og:image" content={headData.ogImage} />
        <meta property="og:type" content={headData.ogType} />
        <meta property="og:description" content={headData.ogDescription} />
        <link rel="canonical" href={headData.canonicalUrl} />
      </Head>
      <Header />
      <main>
        <h2>Products:</h2>
        <Gallery>
          {products.map(product => (
            product.name !== 'Landing Page' && (
              <GalleryTile key={product.id} img={product.content.images[0].filename} alt={product.name} text={product.name} url={`/equipment-catalog/envelope-storage/${product.slug}`} />
            )
          ))}
        </Gallery>
      </main>
      <Footer />
    </>
  );
};

EnvelopeStorage.propTypes = {
  story: PropTypes.object,
  products: PropTypes.array,
};

export async function getStaticProps() {

  const sbParams = {
    version: 'draft', // or published
  };

  const products = await Storyblok.get('cdn/stories', {
    version: 'draft', // or published
    starts_with: 'equipment-catalog/envelope-storage/'
  });

  const { data } = await Storyblok.get('cdn/stories/equipment-catalog/envelope-storage/', sbParams);

  return {
    props: {
      story: data ? data.story : null,
      products: products ? products.data.stories : null
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default EnvelopeStorage;
