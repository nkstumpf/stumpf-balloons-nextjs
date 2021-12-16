import React from 'react';
import Link from 'next/link';
import Button from '@components/Button';

// hero styles

    // position: relative;
    // width: 100%;
    // height: 564px;
    // background-color: ${(props) => props.theme.colors.background.dark};
    // overflow: hidden;

    // & picture {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     height: 564px;
    //     opacity: 0.7;
    //     z-index: 10;
    // }

    // & div {
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     top: 0;
    //     left: 0;
    //     z-index: 20;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;

    //     h1 {
    //         text-align: center;
    //         padding: 5px;
    //         width: 100%;
    //         background-color: ${(props) => props.theme.colors.background.transparentaccent};
    //         font-family: ${(props) => props.theme.fonts.logo};
    //     }
    // }

const Hero = ({imgSrc, imgAlt, headerText, withBtn, btnText, btnUrl}) => {
    return (
        <section>
            <picture className='hero__bg'>
                <img src={imgSrc} alt={imgAlt} width="100%" height="auto"/>
            </picture>
            <div>
                <h1>{headerText}</h1>
                {withBtn && (
                    <Button btnText={btnText} btnUrl={btnUrl} btnStyle='light' />
                )}
            </div>
        </section>
    )
}

export default Hero;
