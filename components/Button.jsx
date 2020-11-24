import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button `
    width: 200px;
    height: 48px;
    color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.text.light : props.theme.colors.text.dark};
    background-color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.background.dark : props.theme.colors.background.light};
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
    border-radius: 10px 0px 10px 0px;
    border: none;

    &:hover {

        color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.text.dark : props.theme.colors.text.light};
        background-color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.background.light : props.theme.colors.background.dark};
        cursor: pointer;
    }
`

export default function Button({ btnText, btnUrl, btnStyle }) {
    return (
        <Link href={btnUrl}>
            <StyledButton btnStyle={btnStyle}>
                {btnText}
            </StyledButton>
        </Link>
    )
}