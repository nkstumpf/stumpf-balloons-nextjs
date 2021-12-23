import React from 'react';
import Storyblok from '@/lib/storyblok';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

const CatalogLandingPage = ({ data }) => {
  const sbPageID = 91619610;
  console.log(data);

  return (
    <>
      <Header />
      <section>
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
      </section>
      <Footer />
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
