import React from 'react';
import styled from 'styled-components';
import { ArrowDownCircle } from 'react-feather';

const StyledBanner = styled.div `
    position: relative;
    z-index: 25;
    height: 103px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background.dark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    text-align: center;

    & a {
        cursor: pointer;
    }

    & h2 {
        color: ${(props) => props.theme.colors.text.accent};
        font-size: ${(props) => props.theme.fonts.sizes.headingsm};
        font-family: ${(props) => props.theme.fonts.body};
        padding: 10px;
    }

    & svg {
        color: ${(props) => props.theme.colors.text.accent};
        width: 48px;
        height: 48px;
        
        &:hover {
            color: ${(props) => props.theme.colors.text.light};
        }
    }
`

export default function Banner() {
    return (
        <StyledBanner>
        <a href="#services-section"><ArrowDownCircle /></a>
        </StyledBanner>
    )
}