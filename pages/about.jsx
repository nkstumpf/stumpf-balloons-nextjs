import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Banner from '@components/Banner';

const StyledSection = styled.section `

    & h1 {
        
    }

    & p {
        text-align: left;
        margin: 16px;
        font-family: ${(props) => props.theme.fonts.body};
        line-height: ${(props) => props.theme.fonts.sizes.headingsm};
    }
`

const About = () => {

    const headData = {
        title: 'About',
        ogTitle: 'About',
        ogUrl: 'https://www.stumpfballoons.com/about',
        ogImage: '/images/social-image.jpg',
        ogType: 'website',
        ogDescription:
          'About Stumpf Balloons & Banners',
        canonicalUrl: 'https://www.stumpfballoons.com/about',
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
            <Hero headerText="About" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
            <Banner btnText="Contact" btnUrl="/contact" />
            <h1>Meet Paul.</h1>
            <img src="/images/paul.jpg" alt="Paul Stumpf" width="320px" height="auto" />
                <p>Paul S. Stumpf built his first hot air balloon at the age of 17.  Since then, he has been continually involved in the construction, maintenance, repair and inspection of hot air balloons.  A twenty five year veteran of the balloon maintenance business, Paul has been a featured speaker at many of the largest ballooning safety seminars in the US.  Paul also authored the popular Balloon Life magazine column, "Repair Station" for many years.</p>
            </StyledSection>
            <Footer />
        </>
    )
}

export default About;
