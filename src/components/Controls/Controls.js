import React, { Component } from 'react';
import styles from './Controls.module.css';

class Controls extends Component {
  state = {};

  render() {
    return (
      <section className={styles.controls}>
        <button type="button" className={styles.buttonPrev}>
          Назад
        </button>
        <button type="button" className={styles.buttonNext}>
          Вперед
        </button>
      </section>
    );
  }
}

export default Controls;
