import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Banner from '@components/Banner';
import CategoryTile from '@components/CategoryTile';
import Button from '@components/Button';

// main styles
    // & h1, h2, h3, h4, h5 {
    //   text-align: center;
    //   font-family: ${(props) => props.theme.fonts.heading};
    //   font-size: ${(props) => props.theme.fonts.sizes.heading};
    // }

    // & p {
    //   text-align: left;
    //   margin: 16px;
    //   font-family: ${(props) => props.theme.fonts.body};
    //   line-height: ${(props) => props.theme.fonts.sizes.headingsm};
    // }

    // .flexbox {
    //   display: flex;
    //   justify-content: center;
    // }

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
      <main id="maincontent">
        <Hero headerText="Welcome!" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul flying a home build balloon" />
        <Banner btnText="Place an Order" btnUrl="/contact" snapLink="#start-here" />
        <section id="start-here">
          <h2 className="">Welcome to the Stumpf Balloons web site and online catalog!</h2>
          <p>Stumpf Balloons offers an extensive assortment of products for Hot Air Balloonists, and one of the most comprehensive selections of hot air ballooning equipment and services available anywhere in the world. Even if you're not a balloonist, you will still see many unique and hard-to-find items throughout our site.</p>
          <p>As always, I offer friendly professional advice from a real live person, M-F 9-5 Eastern time.</p>
          <div className="flexbox">
            <Button className="contact-btn" btnText="Contact Us!" btnUrl="/contact" btnStyle="dark" />
          </div>
          <p>Happy surfing! Paul S. Stumpf - Owner.</p>
        </section>
        <section>
          <CategoryTile img={images.repairstation} alt='photo of pauls repair station' text='Repair Station' url='/repair-station' />
          <CategoryTile img={images.catalog} alt='photo of pauls repair station' text='Equipment Catalog' url='/equipment-catalog' />
          <CategoryTile img={images.banners} alt='photo of pauls repair station' text='Banners' url='/banners' />
          <CategoryTile img={images.balloonbuilding} alt='photo of pauls repair station' text='Balloon Building' url='/balloon-building' />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage;
