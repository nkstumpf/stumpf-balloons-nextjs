import React from 'react';
import PropTypes from 'prop-types';
import { DataProvider } from '@/data/JobDataContext';

const TestLayout = ({ children }) => {
  return (
    <DataProvider>
      <Container>
        {children}
      </Container>
    </DataProvider>
  );
};

TestLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestLayout;
