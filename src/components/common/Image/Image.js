import React from 'react';
import PropTypes from 'prop-types';

const Image = ({url, name}) => {
  const adjustSize = url => url.replace(url.slice(url.indexOf('/', 25)), '/100/100');
  
  return(
    <img id="photo" src={adjustSize(url)} alt={name}/>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Image;

