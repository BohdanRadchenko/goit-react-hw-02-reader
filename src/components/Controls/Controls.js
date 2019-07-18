import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ hendleDecrement, hendleIncrement }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.buttonPrev}
        name="buttonPrev"
        onClick={hendleDecrement}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.buttonNext}
        name="buttonNext"
        onClick={hendleIncrement}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
