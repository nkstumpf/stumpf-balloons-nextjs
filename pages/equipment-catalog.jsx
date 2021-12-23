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

export default function EquipmentCatalog() {
    return (
        <>
            <Header />
            <section>
                <h1>Equipment Catalog</h1>
            </section>
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
