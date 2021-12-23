import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledCategory = styled.section `
    position: relative;
    width: 320px;
    height: 320px;
    background-color: ${(props) => props.theme.colors.background.primary};
    margin: 0 auto;
    margin-bottom: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    & a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text.accent};
    }

    & img {
        width: 300px;
        height: 300px;
        border: solid ${(props) => props.theme.colors.background.dark} 2px;
        border-radius: 10px 0px 10px 0px;
    }

    h1 {    
        position: absolute;
        top: 140px;
        left: 10px;
        width: 269px;
        background-color: ${(props) => props.theme.colors.background.transparentdark};
        font-family: ${(props) => props.theme.fonts.heading}; 
        font-size: ${(props) => props.theme.fonts.sizes.headingsm}; 
        color: ${(props) => props.theme.colors.text.secondary};
        padding: 16px;
        text-align: center;
    }
`

const CategoryTile = ( {img, alt, text, url} ) => {
    return (
        <StyledCategory id="services-section">
                <Link href={url}>
                    <a>
                        <picture>
                            <img src={img} alt={alt} />
                        </picture>
                        <h1>{text}</h1>
                    </a>
                </Link>
        </StyledCategory>
    )
}

export default CategoryTile;
