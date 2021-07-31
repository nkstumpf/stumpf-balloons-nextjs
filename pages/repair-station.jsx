import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Hero from '@components/Hero';
import Banner from '@components/Banner';
import Header from '@components/Header';
import Footer from '@components/Footer';

const StyledSection = styled.section `
    height: 375px;
    text-align: center;

    & h1 {
        position: relative;
        top: 80px;
    }
`

const RepairStation = () => {
    const headData = {
        title: 'Hot Air Balloon Repair Station',
        ogTitle: 'Hot Air Balloon Repair Station',
        ogUrl: 'https://www.stumpfballoons.com/repair-station',
        ogImage: '/images/social-image.jpg',
        ogType: 'website',
        ogDescription:
           'Stumpf Balloons & Banners | Hot Air Balloon Repair Station',
        canonicalUrl: 'https://www.stumpfballoons.com/repair-station',
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
            <StyledSection>
                <Hero headerText="Repair Station" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
                <Banner btnText="Services" btnUrl="#services" />
                <div id="services">
                    <p>// Repair Station Services</p>
                </div>
            </StyledSection>
            <Footer />
        </>
    )
}

export default RepairStation;
