import React from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import Footer from '@components/Footer';

const StyledSection = styled.section `
    height: 375px;
    text-align: center;

    & h1 {
        position: relative;
        top: 80px;
    }
`

export default function Contact() {
    return (
        <>
            <Header />
            <StyledSection>
                <h1>Contact us!</h1>
                <form>A contact form placeholder</form>
            </StyledSection>
            <Footer />
        </>
    )
}