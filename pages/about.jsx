import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Button from '@components/Button';
import Breadcrumbs from '@components/Breadcrumbs';

const About = () => {

  const meta = {
    title: 'Stumpf Balloons & Banners | About Paul',
    canonicalUrl: 'https://www.stumpfballoons.com/about',
    ogUrl: 'https://www.stumpfballoons.com/about',
    ogImage: '/images/social-image.jpg',
    ogType: 'website',
    ogDescription:'Hot air ballooning banners, equipment and repair station since 1975',
  };

  const breadcrumbs = [
    {
      name: 'about',
      href: '/about'
    }
  ];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.ogDescription} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:type" content={meta.ogType} />
        <meta property="og:description" content={meta.ogDescription} />
      </Head>
      <Header />
      <Hero headerText="About" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
      <Breadcrumbs links={breadcrumbs} />
      <main>
        <section>
          <h2 id="about-paul">About Paul</h2>
          <p>Paul S. Stumpf is the owner and operator of FAA Certified Hot Air Balloon Repair Station RG5R170N.</p>
          <img src="/images/paul.jpg" alt="Paul Stumpf" width="320px" height="auto" />
          <p>"Since 1980, I have specialized in the fabrication, repair and inspection of hot air balloons, as a full time occupation."</p>
          <h2>Early Years</h2>
          <p>Paul S. Stumpf built his first hot air balloon at the age of 17.  Since then, he has been continually involved in the construction, maintenance, repair and inspection of hot air balloons.</p>
          <h3>Paul's Career</h3>
          <p>A twenty five year veteran of the balloon maintenance business, Paul has been a featured speaker at many of the largest ballooning safety seminars in the US.  Paul also authored the popular Balloon Life magazine column, "Repair Station" for many years.</p>
          <h4>Vermont Living</h4>
          <img src="/images/sb-vermont-fall.jpg" alt="Arial shot of the Vermont repair station in Fall" width="320px" height="auto" />
          <p>Never one for traditional office spaces, in 1999 Paul moved his business from a boat building loft in Bristol, RI to an 1800's farmstead in Andover, VT. Paul operates his repair station out of the properties historic horse barn and can often be seen hoisting balloon baskets and the like into the second story renovated hay loft via a custom winch system that he purpose built upon purchasing the property.</p>
          <p>Want to learn more about the hot air balloon repair station? Check out more pictures and tons of info about balloon repair and maintenance on the <a href="/repair-station">Repair Station</a> page!</p>
          <h5>Ask the Repair Man</h5>
          <img src="/images/extra.jpg" alt="Paul working inside a cold air inflated balloon" width="320px" height="auto" />
          <p>If you have a balloon maintenance question for Paul, you can submit e-mail queries for consideration. Paul will not be able to respond to all questions personally, but he will answer as many as possible. Questions and answers of a general interest will be posted on the <a href="/ask-the-repair-man">Ask the Repairman</a> page!</p>
          <div className="flexbox">
            <Button btnText="Ask a Question!" btnUrl="/contact" btnStyle='dark'/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
