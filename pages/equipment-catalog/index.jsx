import React from 'react';
import Storyblok from '@/lib/storyblok';
import styled from 'styled-components';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CategoryTile from '@/components/CategoryTile';
import Link from 'next/link';

const StyledSection = styled.section `
  margin: 0 25px;

  & ul {
    margin: 0;
    padding: 0;

    span {
      margin-left: 10px;
  }
  }

  & li {
    list-style: none;
  }

  & li:hover {
    cursor: pointer;
    color: hotpink;
  }
`;

const CatalogLandingPage = ({ data }) => {
  const sbPageID = 91619610;
  console.log(data);

  return (
    <>
      <Header />
      <StyledSection>
          <h1>Equipment Catalog</h1>
          <h2>All Products:</h2>
            {data.map(page => {
              if(page.id !== sbPageID) {
                return (
                  <ul>
                    <Link href={`/equipment-catalog/${page.slug}`}><li>{page.content.name}</li></Link>
                  </ul>
                );
              }
            })}
      </StyledSection>
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps() {

  let sbParams = {
    // change to `published` to load the published version
    version: "draft",
  };

  let { data } = await Storyblok.get(`cdn/stories/`, sbParams);

  return {
    props: {
      data: data.stories
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default CatalogLandingPage;
