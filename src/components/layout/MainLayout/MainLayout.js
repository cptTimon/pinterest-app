import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import Container from '../Container/Container';

const MainLayout = ({children}) => (
  <div>
    <PageNav />
    <Container>
      { children }
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;