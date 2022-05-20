import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';

const BalloonBuilding = () => {

  const headData = {
    title: 'Balloon Building',
    ogTitle: 'Stumpf Balloons & Banners - Balloon Building',
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription: 'Hot air ballooning banners, equipment and repair station since 1975',
    canonicalUrl: 'https://www.stumpfballoons.com/balloon-building',
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
      <Hero headerText="Balloon Building" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="" />
      <main>
        <section>
          <h2>Balloon Building</h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BalloonBuilding;
