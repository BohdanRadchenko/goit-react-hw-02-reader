import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ itemsLength, indexValue }) => {
  return (
    <p className={styles.counter}>
      {indexValue}/{itemsLength}
    </p>
  );
};

export default Counter;
