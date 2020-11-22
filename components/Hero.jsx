import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledHero = styled.section `

    position: relative;
    width: 100%;
    height: 564px;
    background-color: ${(props) => props.theme.colors.background.dark};
    overflow: hidden;

    & picture {
        position: absolute;
        top: 0;
        left: 0;
        height: 564px;
        opacity: 0.7;
        z-index: 10;
    }

    & div {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function Hero() {
    return (
        <StyledHero>
            <picture className='hero__bg'>
                <img src="/images/sb-bg-mobile.jpg" alt="Paul in homebuild balloon" width="100%" height="auto"/>
            </picture>
            <div>
                <Button btnText='Place an Order!' btnStyle='light' />
            </div>
        </StyledHero>
    )
}