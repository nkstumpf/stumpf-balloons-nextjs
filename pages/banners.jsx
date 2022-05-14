import React from 'react';
import PropTypes from 'prop-types';
import Header from '@components/Header';
import Footer from '@components/Footer';

// section styles
    // height: 375px;
    // text-align: center;

    // & h1 {
    //     position: relative;
    //     top: 80px;
    // }

export default function Banners() {
    return (
        <>
            <Header />
            <section>
                <h1>Banners</h1>
            </section>
            <Footer />
        </>
    )
}
