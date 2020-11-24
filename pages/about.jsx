import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledSection = styled.section `
    height: 375px;
    text-align: center;

    & h1 {
        position: relative;
        top: 80px;
    }
`

export default function About() {
    return (
        <>
            <Header />
            <StyledSection>
            <h1>About Paul:</h1>
                <p>Paul S. Stumpf built his first hot air balloon at the age of 17.  Since then, he has been continually involved in the construction, maintenance, repair and inspection of hot air balloons.  A twenty five year veteran of the balloon maintenance business, Paul has been a featured speaker at many of the largest ballooning safety seminars in the US.  Paul also authored the popular Balloon Life magazine column, "Repair Station" for many years.</p>
            </StyledSection>
            <Footer />
        </>
    )
}