/*eslint-disable*/
import React, { Component } from 'react';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends Component {
  state = {};
  render() {
    return (
      <div className={styles.reader}>
        <Publication />
        <Counter />
        <Controls />
      </div>
    );
  }
}

export default Reader;
