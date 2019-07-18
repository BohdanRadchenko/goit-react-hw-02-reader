import React from 'react';
import styles from './Controls.module.css';

const Controls = ({
  hendleDecrement,
  hendleIncrement,
  indexValue,
  itemsLength,
}) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.buttonPrev}
        name="buttonPrev"
        onClick={hendleDecrement}
        disabled={indexValue === 1}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.buttonNext}
        name="buttonNext"
        onClick={hendleIncrement}
        disabled={indexValue === itemsLength}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
