import react from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';

const StyledHomePage = styled.main`
  position: relative;
  min-height: 100vh;
  min-width: 375px;
`;

export default function HomePage() {

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
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
      </Head>

      <StyledHomePage id="maincontent">
        <Header/>
      </StyledHomePage>
    </>
  )
}
