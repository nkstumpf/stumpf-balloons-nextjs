import React from 'react';
import Link from 'next/link';

const Button = ({ btnText, btnUrl }) => {
    return (
        <Link href={btnUrl}>{btnText}</Link>
    )
}

export default Button;
