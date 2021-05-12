import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

const MainLayout = ({children}) => (
  <div>
    <PageNav />
    <Container>
      { children }
    </Container>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;