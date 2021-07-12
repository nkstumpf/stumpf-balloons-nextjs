import React, { useState } from 'react';
import Head from '@components/Head';
import TestLayout from '@layouts/testLayout';
import CardContainer from '@components/CardContainer';
import MediaCard from '@components/MediaCard';
import Button from '@components/Button';

// This is an example of how to build out an individual page:

// 1. import CareersLayout from '@layouts/careers';
// 2. Drop <CareersLayout> in below the <Head> component
// 3. Use it to wrap your other individual components
// 4. Add your components
// 5. Add your page content via component props

const TestComponentsPage = () => {

// Card Slider example:

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
    }
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

  return (
    <>
      <Head meta={meta} />
      {/* Open layout wrapper here */}
      <TestLayout>
        {/* All other components go inside the layout wrapper here */}
        <CardContainer heading="Meet Our Team" tagline="Team Subheading">
          <MediaCard active={activeCard === 0}>
            <MediaCard.Image src="/images/paul.jpg" alt="Paul Stumpf" />
            <MediaCard.Content>
              <MediaCard.SubHeading>Owner</MediaCard.SubHeading>
              <MediaCard.Heading>Paul Stumpf</MediaCard.Heading>
              <MediaCard.Body>
                <p>Andover VT</p>
              </MediaCard.Body>
              <Button as="a" href="#" variant="plain">Read More</Button>
            </MediaCard.Content>
          </MediaCard>
          <MediaCard active={activeCard === 1}>
            <MediaCard.Image src="/images/paul.jpg" alt="Paul Stumpf" />
            <MediaCard.Content>
              <MediaCard.SubHeading>Owner</MediaCard.SubHeading>
              <MediaCard.Heading>Paul Stumpf</MediaCard.Heading>
              <MediaCard.Body>
                <p>Andover VT</p>
              </MediaCard.Body>
              <Button as="a" href="#" variant="plain">Read More</Button>
            </MediaCard.Content>
          </MediaCard><MediaCard active={activeCard === 2}>
            <MediaCard.Image src="/images/paul.jpg" alt="Paul Stumpf" />
            <MediaCard.Content>
              <MediaCard.SubHeading>Owner</MediaCard.SubHeading>
              <MediaCard.Heading>Paul Stumpf</MediaCard.Heading>
              <MediaCard.Body>
                <p>Andover VT</p>
              </MediaCard.Body>
              <Button as="a" href="#" variant="plain">Read More</Button>
            </MediaCard.Content>
          </MediaCard>
          <div className="slider-dots text-center mb-16 mt-8 md:hidden">
            <button type="button" className={`${activeCard === 0 ? 'active' : ''}`} onClick={() => changeCard(0)} />
            <button type="button" className={`${activeCard === 1 ? 'active' : ''}`} onClick={() => changeCard(1)} />
            <button type="button" className={`${activeCard === 2 ? 'active' : ''}`} onClick={() => changeCard(2)} />
          </div>
        </CardContainer>
        {/* Close layout wrapper here */}
      </TestLayout>
    </>
  );
};

export default TestComponentsPage;
