import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 24px 0px 24px 0px; */

    /* max-width: 1000px;
    position: relative;
    margin: auto; */
`

const Carousel = ({children}) => {
  return (
    <StyledDiv>
        {children}
    </StyledDiv>
  );
};

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;