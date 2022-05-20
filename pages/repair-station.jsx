import React from 'react';
import Head from 'next/head';
import Hero from '@components/Hero';
import Carousel from '@components/Carousel';
import Header from '@components/Header';
import Footer from '@components/Footer';

const images = [
  {
    filename: '/images/sb-repair-station-1.jpg',
    alt: 'Fabric cutting station',
    caption: 'Fabric cutting station'
  },
  {
    filename: '/images/sb-repair-station-2.jpg',
    alt: 'Fabric layout and storage',
    caption: 'Fabric layout and storage'
  },
  {
    filename: '/images/sb-repair-station-3.jpg',
    alt: 'Sewing machine stations',
    caption: 'Sewing machine stations'
  },
  {
    filename: '/images/sb-repair-station-4.jpg',
    alt: 'Burner service bench',
    caption: 'Burner service bench'
  },
  {
    filename: '/images/sb-repair-station-5.jpg',
    alt: 'Paul\'s office',
    caption: 'Paul\'s office'
  },
  {
    filename: '/images/sb-repair-station-6.jpg',
    alt: 'Gore by gore inspection',
    caption: 'Gore by gore inspection'
  },
  {
    filename: '/images/sb-repair-station-7.jpg',
    alt: 'Loading dock',
    caption: 'Loading dock'
  },
  {
    filename: '/images/sb-repair-station-8.jpg',
    alt: 'Loading dock 2',
    caption: 'Bring er\' up!'
  },
  {
    filename: '/images/sb-repair-station-9.jpg',
    alt: 'Ballloon bagging / Dog bagging',
    caption: 'Ballloon bagging / Dog bagging'
  },
  {
    filename: '/images/sb-repair-station-10.jpg',
    alt: 'What a view!',
    caption: 'What a view!'
  }
];

const RepairStation = () => {


  const headData = {
    title: 'Repair Station',
    ogTitle: 'Stumpf Balloons & Banners - FAA Certified Hot Air Balloon Repair Station',
    ogUrl: 'https://www.stumpfballoons.com/repair-station',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription: 'Stumpf Balloons & Banners - Hot Air Balloon Repair Station',
    canonicalUrl: 'https://www.stumpfballoons.com/repair-station',
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
      <Hero headerText="Repair Station" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
      <main>
        <section className="flex flex-col gap-8 mb-8">
          <h2>FAA Certified Hot Air Balloon Repair Station RG5R170N</h2>
          <p>Certified for repair & maintenance of the following hot air balloon manufacturers:</p>
          <ul>
            <a href="https://ravenaerostar.com/"><li>Aerostar International Inc. - Authorized Factory Service Center</li></a>
            <a href="http://www.fireflyballoons.net/"><li>Firefly Balloons (Balloon Works)</li></a>
            <a href="http://adamsballoons.us/"><li>Adams Balloons</li></a>
            <a href="https://cameronballoons.com/"><li>Cameron Balloons U.S.</li></a>
            <a href="#"><li>Eagle Balloons Ltd.</li></a>
            <a href="#"><li>Experimental / Amateur-Built Balloons</li></a>
            <a href="#"><li>Experimental / Exhibition Category</li></a>
            <a href="http://www.fireflyballoons.net/"><li>Galaxy Balloons (Firefly Balloons)</li></a>
            <a href="https://www.headballoons.com/"><li>Head Ballooning Inc.</li></a>
            <a href="https://www.kubicekballoons.eu/"><li>Kubicek Balloons</li></a>
            <a href="https://www.lindstrand.com/"><li>Lindstrand Balloons Ltd.</li></a>
            <a href="https://nationalballooning.weebly.com/"><li>National Ballooning</li></a>
            <a href="#"><li>Thunder & Colt</li></a>
            <a href="https://ultramagic.com/"><li>UltraMagic Balloons</li></a>
          </ul>
          <section>
            <h3 id="services">Our Services:</h3>
            <ul>
              <li>Service...</li>
              <li>Service...</li>
              <li>Service...</li>
            </ul>
          </section>
          <section className="text-center">
            <h4 className="mb-4">Virtual Tour</h4>
            <Carousel images={images} />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RepairStation;
