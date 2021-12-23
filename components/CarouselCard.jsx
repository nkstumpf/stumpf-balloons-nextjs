import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div `
    p {
        background-color: black;
        color: white;
    }

`;

const CarouselCard = ({
    active,
    imgSrc,
    imgAlt,
    caption,
    className,
    ...props
}) => {
    return (
        <StyledDiv className={`fade ${active ? '' : 'hidden'}`}>
            <div className="img-container">
                <img src={imgSrc} alt={imgAlt} width="100%" height="auto" />
            </div>
            <p className="caption">{caption}</p>
        </StyledDiv>
    );
};

export default CarouselCard;
