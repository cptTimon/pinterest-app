import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  handler,
  ...props
}) => {
  const classes = [];
  if (variant) classes.push(styles[variant]);
  else classes.push(styles.main);

  return (
    <button className={classes.join(' ')} onClick={handler} >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  handler: PropTypes.func,
};

export default Button;