import React from 'react';
import PropTypes from 'prop-types';
import Storyblok from '@/lib/storyblok';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const EnvelopeStorage = ({ story }) => {

  const headData = {
    title: 'Home',
    ogTitle: 'Home',
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription:
      'Hot air ballooning banners, equipment and repair station since 1975',
    canonicalUrl: 'https://www.stumpfballoons.com',
  };

  const images = {
    repairstation: '/images/repair-station.jpg',
    catalog: '/images/equipment-catalog.jpg',
    banners: '/images/banners.jpg',
    balloonbuilding: '/images/balloon-building.jpg',
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
        <Hero
          headerText="Envelope Storage"
          imgSrc="/images/sb-bg-mobile.jpg"
          imgAlt="Paul flying a home build balloon"
          withBtn
          btnText="Place an Order"
          btnUrl="/contact"
        />
        <section className="mx-auto max-w-screen-xl mb-8 p-8 text-black text-base">
          <h2 className="text-baseLg mb-4">Envelope Storage</h2>
        </section>
      </main>
      <Footer />
    </>
  )
};

export async function getStaticProps() {

  let sbParams = {
    version: "draft", // or published
  };

  let { data } = await Storyblok.get(`cdn/stories/equipment-catalog/envelope-storage/`, sbParams);

  console.log(data);

  return {
    props: {
      story: data ? data.story : null
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default EnvelopeStorage;
