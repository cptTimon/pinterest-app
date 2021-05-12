import React from 'react';
import styles from './Footer.module.scss';
import Container from '../Container/Container';

const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <p>&copy;PinterestApp</p>
    </Container>
  </div>
);

export default Footer;
