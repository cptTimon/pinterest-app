import React from 'react';
import styles from './PageNav.module.scss';
import Container from '../Container/Container';
import Button from '../../common/Button/Button';

const PageNav = () => (
  <div>
    <Container>
      <div className={styles.flexboxParent}>
        <div className={styles.logo}>
          <i className='fas fa-camera-retro'/>
          <h4>PinterestApp</h4>
        </div>
        <div className={styles.switch}>
          <Button variant='layout'>
            <i className='far fa-circle'></i>
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

export default PageNav;