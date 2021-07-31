import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Camera, Facebook, Smile, Mail, User } from 'react-feather';

const StyledFooter = styled.nav `
    height: 320px;
    background-color: ${(props) => props.theme.colors.background.dark};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & ul {
        list-style: none;

        & li {
            margin-bottom: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & svg {
                color: ${(props) => props.theme.colors.text.light};
                margin-right: 10px;
            }
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

 const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <li>
                    <User />
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Mail />
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Smile />
                    <Link href="/testimonials">
                        <a>Testimonials</a>
                    </Link>
                </li>
                <li>
                    <Camera />
                    <Link href="/photo-blog">
                        <a>Paul's Photography</a>
                    </Link>
                </li>
                <li>
                    <Facebook />
                    <a href="https://www.facebook.com/psstumpf">Follow Paul on Facebook</a>
                </li>
            </ul>
        </StyledFooter>
    )
}

export default Footer;
