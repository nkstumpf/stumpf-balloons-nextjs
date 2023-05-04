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

  const meta = {
    title: `Stumpf Balloons & Banners | ${content.page_name}`,
    canonicalUrl: 'https://www.stumpfballoons.com',
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription:'Hot air ballooning envelope storage, balloon envelope bags, storage solutions',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.ogDescription} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:type" content={meta.ogType} />
        <meta property="og:description" content={meta.ogDescription} />
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
    version: 'draft'
  };

  const products = await Storyblok.get('cdn/stories', {
    version: 'draft',
    starts_with: 'equipment-catalog/envelope-storage/'
  });

  const { data } = await Storyblok.get('cdn/stories/equipment-catalog/envelope-storage/', sbParams);

  return {
    props: {
      story: data ? data.story : null,
      products: products ? products.data.stories : null
    }
  };
}

export default EnvelopeStorage;
