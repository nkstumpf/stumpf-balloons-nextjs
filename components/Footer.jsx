import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FileText } from 'react-feather';

const StyledFooter = styled.nav `
    height: 320px;
    background-color: ${(props) => props.theme.colors.background.dark};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & ul {
        list-style: none;

        & li {
            margin-bottom: 5px;
        }

        & li:last-child {
            margin-bottom: 0px;
        }
    }

    & a {
        font-family: Arial;
        font-size: ${(props) => props.theme.fonts.sizes.headingsm};
        color: ${(props) => props.theme.colors.text.light};
        text-decoration: none; 
    }

    & a:hover {
        color: ${(props) => props.theme.colors.text.accent};
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/testimonials">
                        <a>Testimonials</a>
                    </Link>
                </li>
                <li>
                    <Link href="/photography">
                        <a>Paul's Photography</a>
                    </Link>
                </li>
                <li>
                    <Link href="/facebook">
                        <a>Follow Paul on Facebook</a>
                    </Link>
                </li>
            </ul>
        </StyledFooter>
    )
}