import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';

const headData = {
  title: 'Photo Blog',
  ogTitle: 'Stumpf Balloons - Photo Blog',
  ogUrl: 'https://www.stumpfballoons.com/banners',
  ogImage: '/images/social-image.jpg',
  ogType: 'website',
  ogDescription: 'Stumpf Balloons & Banners - Hot Air Balloon Banners',
  canonicalUrl: 'https://www.stumpfballoons.com/photo-blog',
};

const PhotoBlog = () => {
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
      <Hero headerText="Photo Blog" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul flying a home build balloon" />
      <main>
        <section>
          <h2>Paul's Photography</h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PhotoBlog;
