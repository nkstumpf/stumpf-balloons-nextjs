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

    & p, summary, li {
        text-align: left;
        margin: 16px;
        font-family: ${(props) => props.theme.fonts.body};
        line-height: ${(props) => props.theme.fonts.sizes.headingsm};
    }

    & details {
        margin: 0px 16px 0px 16px;
    }

    .flexbox {
        display: flex;
        justify-content: center;

        Button {
        margin-bottom: 16px;
    }

}`

const AskTheRepairMan = () => {

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
            <Hero headerText="Ask the Repair Man!" imgSrc="/images/sb-bg-mobile.jpg" imgAlt="Paul Stumpf" />
            <Banner btnText="Ask a Question!" btnUrl="/contact" snapLink="#faqs" />
            <section className="content" id="faqs">
                <h1 id="about-paul">Ask the Repair Man | FAQs</h1>
                <hr />
                <nav>
                    <ul>
                        <a href="#question-1"><li><strong>Question #1:</strong> Raven/Aerostar Burner types.</li></a>
                        <a href="#question-2"><li><strong>Question #2:</strong> Envelope temperature tell-tales.</li></a>
                        <a href="#question-3"><li><strong>Question #3:</strong> Evaluating fabric condition of a used balloon in New Mexico.</li></a>
                    </ul>
                </nav>
                <p>Scroll down to find the questions in numerical order (click to expand)</p>
                <hr />
                <details id="question-1">
                    <summary><strong>Question:</strong> In casually checking out some Aerostar balloons for possible purchase, I am noticing a wide range in burners. I have come across HPII, HPIII, Zone Five, and even found a Square Shooter. When were the various burners used on Aerostar's and what are some considerations of the various burners?</summary>
                    <p><strong>Answer:</strong> A short history of Raven / Aerostar burners</p>
                    <ul>
                        <li>"Two Can" and "Four Can" Burners.  Made from the late 1960's to 1974 The first production hot air balloon burners manufactured by Raven Industries. Each burner "can" produces about 2 million btu's at optimum fuel pressure.</li>
                        <li>HP 1 a.k.a. "Square Shooter" Burner. Made from 1975 to 1978 The first really reliable burner produced by Raven, rated at around 11 million btu's per burner can. Very early versions have temperamental liquid pilot lights. Later versions introduced the reliable "Screen Head" vapor pilot light.</li>
                        <li>HP 2 Burner. Made from 1979 to 1984 New and improved version of the square shooter. Larger preheat coils increased heat output and reduced noise (about 20% less noise than the HP 1). Rated at 12 million btu's per burner can. All burner plumbing moved inside the can for better aesthetic appearance and less moisture dripping off burner. Piezo igniters added to later models.</li>
                        <li>HP 2 "Update" Burner. Made from 1985 to 1988 Improvements to the HP II which included a new liquid pilot light, increased number of burner jets with adjustable orifices, and improved excess moisture reduction. Rated at 14 million btu's per burner can.</li>
                        <li>HP 3 "Zone Five" Burner. Made from 1989-1999 The first major redesign of Aerostar's burner since the square shooter. Primary innovation was the main control handle which allows gimballing and blasting of two burners at the same time. Other improvements include "blackened coils" for more heat output, better mechanical access for repairs, and the addition of a "Glow" burner in the late 1990's. Rated at 17 million btu's per burner can.</li>
                        <li>HP 3 "Zone Five Turbo" Current production burner. Introduced late 1999. Major innovation in burner jets provide 14% more heat with 29% less noise. Other improvements include, mirror finish stainless steel can with balloon and logo cut-outs, power coated finish on painted parts, better blackening process on burner coils, improved design of metering valve, pilot handles, and coil brackets. Rated at 19 million btu's per burner can.</li>
                    </ul>
                </details>
                <details id="question-2">
                    <summary><strong>Question:</strong> I am looking to purchase a used balloon system. I am interested in a 105. There is one for sale that has a 225 Temp Tab that has been turned. What effect does that have on the value? I have been told that it is not a significant issue... What is your opinion?</summary>
                    <p><strong>Answer:</strong> The 225 tab is almost always tripped at each annual, on the balloons we inspect. Most manufacturers don't require replacement of the tabs until the 250 degree dot is turned. If the balloon has tabs tripped at 275, I would be concerned. If it has tabs tripped higher than that, I'd have a  repair station with strong fabric expertise seriously look at the fabric condition, history & hours. IMPORTANT: Just because the currently installed tab is only tripped at 225 doesn't mean that the balloon never has been temped higher than that. Older temp tabs are usually removed and replaced when tripped at higher temps. You should get a good history of the balloon from the repair station(s) who have maintained/annualled the system in the past. AND... ALWAYS GET A THOROUGH PRE-PURCHASE INSPECTION BY A REPUTABLE REPAIR STATION BEFORE COMMITTING TO BUY ANY USED HOT AIR BALLOON!</p>
                </details>
                <details id="question-3">
                    <summary><strong>Question:</strong> I have been trying to locate a used balloon that is in great shape. The person selling a balloon that I am considering, tells me that the max temp on the envelope was 275. Should I be concerned with this envelope. I also asked questions about  porosity and age of the balloon. The balloon was manufactured in 1992 (128 hours) and the person selling it says they have no idea of the porosity because the manufacturer doesn't require this test at an annual. They did mention that the balloon comes from the New Mexico area and due to little grass there isn't much moisture that can damage the coating of the fabric. Any thoughts on the over temp and how I can determine if this envelope is worth my time would be appreciated.</summary>
                    <p><strong>Answer:</strong> Most manufacturers have had some problems with fabric. I wouldn't buy any balloon you are looking at, without a porosity test. Even though the manufacturer doesn't "officially" require one, it's a simple matter to take it to a repair station that has an Aerostar porosity tester, and have them evaluate it. The balloon would be much more enticing if it has some extended-life fabric (like Duraflight or Hyperlast) in the top. The more the better. Overtemping on an occasional basis is not necessarily a big concern. However, I would like to know the history of the balloon to see if overtemping has been a chronic occurrence. I would recommend talking to the Repair Station(s) that  maintained and annualled the system. One other item of concern is color fading from UV exposure. Some British fabrics have had  serious problems with dye fading. Especially the red, orange, purple, pink and burgundy colors. In Albuquerque, this could be a serious concern due to high UV exposure. Not only is it aesthetically displeasing, but It can be accompanied by overall fabric degradation.</p>
                </details>
            </section>
            
            </StyledSection>
            <Footer />
        </>
    )
}

export default AskTheRepairMan;
