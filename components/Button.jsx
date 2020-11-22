import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button `
    width: 200px;
    height: 48px;
    color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.text.secondary : props.theme.colors.text.primary};
    background-color: ${(props) => props.btnStyle === "dark" ? props.theme.colors.background.secondary : props.theme.colors.background.primary};
    font-family: ${(props) => props.theme.fonts.header};
    border-radius: 10px 0px 10px 0px;
    border: none;
    `

export default function Button({ btnText, btnStyle }) {
    return (
        <StyledButton btnStyle={btnStyle}>
            {btnText}
        </StyledButton>
    )
}