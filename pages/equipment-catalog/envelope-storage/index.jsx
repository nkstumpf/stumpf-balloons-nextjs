import React from 'react';
import PropTypes from 'prop-types';
import Storyblok from '@/lib/storyblok';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const EnvelopeStorage = ({ story }) => {
  // const { content } = story;

  const headData = {
    title: `Stumpf Balloons - ${story.page_name}`,
    ogTitle: `Stumpf Balloons - ${story.page_name}`,
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription:
      'Hot air ballooning envelope storage, balloon envelope bags, storage solutions',
    canonicalUrl: 'https://www.stumpfballoons.com',
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
          headerText={story.page_name}
          imgSrc="/images/sb-bg-mobile.jpg"
          imgAlt="Paul flying a home build balloon"
          withBtn
          btnText="Place an Order"
          btnUrl="/contact"
        />
        <section className="mx-auto max-w-screen-xl mb-8 p-8 text-black text-base">
          <h2 className="text-baseLg mb-4">{story.page_name}</h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

EnvelopeStorage.propTypes = {
  story: PropTypes.object
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
