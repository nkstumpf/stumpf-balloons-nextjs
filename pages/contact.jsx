import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

// section styles
    // height: 375px;
    // text-align: center;

    // & h1 {
    //     position: relative;
    //     top: 80px;
    // }

export default function Contact() {
    return (
        <>
            <Header />
            <section>
                <h1>Contact us!</h1>
                <p>Test branch deploy</p>
                <form>A contact form placeholder</form>
            </section>
            <Footer />
        </>
    )
}
