import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Banner from '@components/Banner';
import CategoryTile from '@components/CategoryTile';

const StyledHomePage = styled.main``;

const HomePage = () => {

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
      <Header />
      <StyledHomePage id="maincontent">
        <Hero headerText="Welcome!" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul flying a home build balloon" />
        <Banner btnText="Place an Order" btnUrl="/contact" />
        <CategoryTile img={images.repairstation} alt='photo of pauls repair station' text='Repair Station' url='/repair-station' />
        <CategoryTile img={images.catalog} alt='photo of pauls repair station' text='Equipment Catalog' url='/equipment-catalog' />
        <CategoryTile img={images.banners} alt='photo of pauls repair station' text='Banners' url='/banners' />
        <CategoryTile img={images.balloonbuilding} alt='photo of pauls repair station' text='Balloon Building' url='/balloon-building' />
      </StyledHomePage>
      <Footer />
    </>
  )
}

export default HomePage;
