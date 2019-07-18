/*eslint-disable */
import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ itemsLength, indexCount }) => {
  return (
    <p className={styles.counter}>
      {indexCount}/{itemsLength}
    </p>
  );
};

export default Counter;
