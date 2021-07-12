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

// Data sctructure

/* const productData = {
    bags: {
        envelopeBags: {
            name: '',
            description: 'a product description',
            price: 19.00,
            sizes: {
                ax5: 'ax5',
                ax5: 'ax5',
                ax5: 'ax5',
                ax5: 'ax6'
            },
            colors: {
                default: 'no color choice avail'
                black: 'black',
                black: 'black',
                black: 'black',
                black: 'black',
                black: 'black'
            },
        }
    },
    attachmentAdapters: {
        
    }
}

export productData;

*/

// const { name,  desc, price, imgUrl } = props;


// export default function EquipmentCatalog(name, desc, price, imgUrl) {
// <Product name={name} desc={desc} price={price} imgUrl={imgUrl} color={producrts.colors.default}/> 
// <Product name={name} desc={desc} price={price} imgUrl={imgUrl} color={producrts.colors}/> 