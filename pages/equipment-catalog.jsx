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

export default function EquipmentCatalog() {
    return (
        <>
            <Header />
            <StyledSection>
                <h1>Equipment Catalog</h1>
            </StyledSection>
            <Footer />
        </>
    )
}