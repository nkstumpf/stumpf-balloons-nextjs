import React from 'react';
import Link from 'next/link';

    // position: relative;
    // width: 320px;
    // height: 320px;
    // background-color: ${(props) => props.theme.colors.background.primary};
    // margin: 0 auto;
    // margin-bottom: 32px;

    // display: flex;
    // justify-content: center;
    // align-items: center;

    // & a {
    //     text-decoration: none;
    //     color: ${(props) => props.theme.colors.text.accent};
    // }

    // & img {
    //     width: 300px;
    //     height: 300px;
    //     border: solid ${(props) => props.theme.colors.background.dark} 2px;
    //     border-radius: 10px 0px 10px 0px;
    // }

    // h1 {
    //     position: absolute;
    //     top: 140px;
    //     left: 10px;
    //     width: 269px;
    //     background-color: ${(props) => props.theme.colors.background.transparentdark};
    //     font-family: ${(props) => props.theme.fonts.heading};
    //     font-size: ${(props) => props.theme.fonts.sizes.headingsm};
    //     color: ${(props) => props.theme.colors.text.secondary};
    //     padding: 16px;
    //     text-align: center;
    // }

const CategoryTile = ( {img, alt, text, url} ) => {
    return (
        <div className="w-80 h-80 overflow-hidden" id="services-section">
                <Link href={url}>
                    <a>
                        <picture>
                            <img src={img} alt={alt} width="auto" height="248px"/>
                        </picture>
                        <h1 className="text-center">{text}</h1>
                    </a>
                </Link>
        </div>
    )
}

export default CategoryTile;
