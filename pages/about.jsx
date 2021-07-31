import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Banner from '@components/Banner';
import Button from '@components/Button';

const StyledSection = styled.section `

    & h1, h2, h3, h4, h5 {
        text-align: center;
        font-family: ${(props) => props.theme.fonts.heading};
        font-size: ${(props) => props.theme.fonts.sizes.heading};
    }

    & p {
        text-align: left;
        margin: 16px;
        font-family: ${(props) => props.theme.fonts.body};
        line-height: ${(props) => props.theme.fonts.sizes.headingsm};
    }

    .flexbox {
        display: flex;
        justify-content: center;

        Button {
        margin-bottom: 16px;
    }
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
            <Banner btnText="Contact" btnUrl="/contact" snapLink="#about-paul" />
            <h1 id="about-paul">About Paul</h1>
            <p>Paul S. Stumpf is the owner and operator of FAA Certified Hot Air Balloon Repair Station RG5R170N.</p>
            <img src="/images/paul.jpg" alt="Paul Stumpf" width="320px" height="auto" />
            <p>"Since 1980, I have specialized in the fabrication, repair and inspection of hot air balloons, as a full time occupation."</p>
            <h2>Early Years</h2>
            <p>Paul S. Stumpf built his first hot air balloon at the age of 17.  Since then, he has been continually involved in the construction, maintenance, repair and inspection of hot air balloons.</p>
            <h3>Paul's Career</h3>
            <p>A twenty five year veteran of the balloon maintenance business, Paul has been a featured speaker at many of the largest ballooning safety seminars in the US.  Paul also authored the popular Balloon Life magazine column, "Repair Station" for many years.</p>
            <h4>Vermont Living</h4>
            <img src="/images/sb-vermont-fall.jpeg" alt="Arial shot of the Vermont repair station in Fall" width="320px" height="auto" />
            <p>Never one for traditional office spaces, in 1999 Paul moved his business from a boat building loft in Bristol, RI to an 1800's farmstead in Andover, VT. Paul operates his repair station out of the properties historic horse barn and can often be seen hoisting balloon baskets and the like into the second story renovated hay loft via a custom winch system that he purpose built upon purchasing the property.</p>
            <p>Want to learn more about the hot air balloon repair station? Check out more pictures and tons of info about balloon repair and maintenance on the <a href="/repair-station">Repair Station</a> page!</p>
            <h5>Ask the Repair Man</h5>
            <img src="/images/extra.jpg" alt="Paul working inside a cold air inflated balloon" width="320px" height="auto" />
            <p>If you have a balloon maintenance question for Paul, you can submit e-mail queries for consideration. Paul will not be able to respond to all questions personally, but he will answer as many as possible. Questions and answers of a general interest will be posted on the <a href="/ask-the-repair-man">Ask the Repairman</a> page!</p>
            <div className="flexbox">
                <Button btnText="Ask a Question!" btnUrl="/contact" btnStyle='dark'/>
            </div>
            </StyledSection>
            <Footer />
        </>
    )
}

export default About;
