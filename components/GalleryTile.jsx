import React from 'react';
import Link from 'next/link';

const GalleryTile = ( {img, alt, text, url} ) => {
    return (
        <div className="w-80 h-80 overflow-hidden rounded-t" id="services-section">
                <Link href={url}>
                    <a>
                        <picture>
                            <img src={img} alt={alt} width="auto" height="248px"/>
                        </picture>
                        {text && (
                        <p className="text-center text-white text-baseLg hover:text-black bg-gradient-to-r from-indigo to-teal rounded-b">{text}</p>
                        )}
                    </a>
                </Link>
        </div>
    )
}

export default GalleryTile;