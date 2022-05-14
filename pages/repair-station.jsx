import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Hero from '@components/Hero';
import Banner from '@components/Banner';
import Carousel from '@components/Carousel';
import CarouselCard from '@/components/CarouselCard';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { ChevronLeft, ChevronRight } from 'react-feather';

// section styles

    // & h1, h2, h3, h4, h5 {
    //     text-align: center;
    //     font-family: ${(props) => props.theme.fonts.heading};
    //     font-size: ${(props) => props.theme.fonts.sizes.heading};
    // }

    // & p, a {
    //     margin: 16px;
    //     font-family: ${(props) => props.theme.fonts.body};
    //     line-height: ${(props) => props.theme.fonts.sizes.headingsm};
    // }

    // .prev, .next {
    //     cursor: pointer;
    //     position: absolute;
    //     top: 50%;
    //     width: auto;
    //     margin-top: -22px;
    //     padding: 16px;
    //     color: white;
    //     font-weight: bold;
    //     font-size: 18px;
    //     transition: 0.6s ease;
    //     border-radius: 0 3px 3px 0;
    //     user-select: none;
    // }

    // .next {
    //     right: 0;
    //     border-radius: 3px 0 0 3px;
    // }

    // .prev:hover, .next:hover {
    //     background-color: rgba(0,0,0,0.8);
    // }

    // .flexbox {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

    // .icons {
    //     margin: 16px 0px 16px 0px;
    // }

const RepairStation = () => {

    // slider state
    const [activeCard, setActiveCard] = useState(0);

    // default slider data
    const cardMeta = [
    {
      name: 'Card 1',
      isActive: true
    },
    {
      name: 'Card 2',
      isActive: false
    },
    {
      name: 'Card 3',
      isActive: false
    },
    {
        name: 'Card 4',
        isActive: false
    },
    {
        name: 'Card 5',
        isActive: false
    },
    {
        name: 'Card 6',
        isActive: false
    },
    {
        name: 'Card 7',
        isActive: false
    },
    {
        name: 'Card 8',
        isActive: false
    },
    {
        name: 'Card 9',
        isActive: false
    },
    {
        name: 'Card 10',
        isActive: false
    },
  ];

    // update active slide
    const changeCard = cardIndex => {
        for(let i = 0; i < cardMeta.length; i++) {
        if(cardIndex === i) {
            cardMeta[i].isActive = true;
            setActiveCard(cardIndex);
        } else {
            cardMeta[i].isActive = false;
        }
        }
    };

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
            <section>
                <Hero headerText="Repair Station" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
                <Banner btnText="Virtual Tour" btnUrl="#tour" snapLink="#tour" />
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
                    <li>// Service...</li>
                    <li>// Service...</li>
                    <li>// Service...</li>
                </ul>
                </section>
                <section>
                    <h4 id="tour">Virtual Tour</h4>
                        <Carousel>
                            <CarouselCard active={activeCard === 0} imgSrc="/images/sb-repair-station-1.jpg" imgAlt="Fabric cutting station" caption="Fabric cutting station" />
                            <CarouselCard active={activeCard === 1} imgSrc="/images/sb-repair-station-2.jpg" imgAlt="Fabric layout and storage" caption="Fabric layout and storage" />
                            <CarouselCard active={activeCard === 2} imgSrc="/images/sb-repair-station-3.jpg" imgAlt="Sewing machine stations" caption="Sewing machine stations" />
                            <CarouselCard active={activeCard === 3} imgSrc="/images/sb-repair-station-4.jpg" imgAlt="Burner service bench" caption="Burner service bench" />
                            <CarouselCard active={activeCard === 4} imgSrc="/images/sb-repair-station-5.jpg" imgAlt="Paul's office" caption="Paul's office" />
                            <CarouselCard active={activeCard === 5} imgSrc="/images/sb-repair-station-6.jpg" imgAlt="Gore by gore inspection" caption="Gore by gore inspection" />
                            <CarouselCard active={activeCard === 6} imgSrc="/images/sb-repair-station-7.jpg" imgAlt="Loading dock" caption="Loading dock" />
                            <CarouselCard active={activeCard === 7} imgSrc="/images/sb-repair-station-8.jpg" imgAlt="Loading dock 2" caption="Bring er' up!" />
                            <CarouselCard active={activeCard === 8} imgSrc="/images/sb-repair-station-9.jpg" imgAlt="Ballloon bagging / Dog bagging" caption="Ballloon bagging / Dog bagging" />
                            <CarouselCard active={activeCard === 9} imgSrc="/images/sb-repair-station-10.jpg" imgAlt="What a view!" caption="What a view!" />
                        </Carousel>
                    <div className="flexbox">
                        <ChevronLeft className="icon" onClick={() => changeCard(activeCard - 1)} />
                        <p className="slider-number">{activeCard +1 } / 10</p>
                        <ChevronRight className="icon" onClick={() => changeCard(activeCard + 1)} />
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default RepairStation;
