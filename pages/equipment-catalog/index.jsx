import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import GalleryTile from '@/components/GalleryTile';

const CatalogHome = () => {

  const meta = {
    title: 'Stumpf Balloons & Banners | Equipment Catalog',
    canonicalUrl: 'https://www.stumpfballoons.com',
    ogUrl: 'https://www.stumpfballoons.com',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription: 'Hot air ballooning banners, equipment and repair station since 1975',
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
        <title>{`${meta.title} | Stumpf Balloons`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.ogDescription} />
        <meta property="og:title" content={`${meta.title} | Stumpf Balloons`} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:type" content={meta.ogType} />
        <meta property="og:description" content={meta.ogDescription} />
      </Head>
      <Header />
      <Hero text="Equipment Catalog" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul flying a home build balloon" />
      <main>
        <section>
          <h2>Product Categories:</h2>
        </section>
        <Gallery>
          <GalleryTile img={images.repairstation} alt='placeholder' text='Banner Bags' url='/equipment-catalog/banner-bags' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Competition' url='/equipment-catalog/competition' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Envelope Storage' url='/equipment-catalog/envelope-storage' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='General Storage' url='/equipment-catalog/general-storage' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Hardware' url='/equipment-catalog/hardware' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Inflator Fans' url='/equipment-catalog/inflator-fans' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Lines & Harnesses' url='/equipment-catalog/lines-and-harnesses' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Quick Releases' url='/equipment-catalog/quick-releases' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Refueling Adaptors' url='/equipment-catalog/refueling-adaptors' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Repair Aids' url='/equipment-catalog/repair-aids' />
          <GalleryTile img={images.repairstation} alt='placeholder' text='Tank Covers' url='/equipment-catalog/tank-covers' />
        </Gallery>
      </main>
      <Footer />
    </>
  );
};

export default CatalogHome;
