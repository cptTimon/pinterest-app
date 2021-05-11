import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';

const Image = ({url, name}) => {
  const adjustSize = url => url.replace(url.slice(url.indexOf('/', 25)), '/200/250');
  
  return (
    <img className={styles.picture}  src={adjustSize(url)} alt={name} />
  );
};

Image.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Image;

