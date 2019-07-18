/*eslint-disable*/
import React, { Component } from 'react';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

const Reader = ({ items, id, indexCount, getId }) => {
  const findId = items.find(el => el.id === id);
  return (
    <div className={styles.reader}>
      <Publication {...findId} />
      <Counter itemsLength={items.length} indexCount={indexCount} />
      <Controls />
    </div>
  );
};

export default Reader;
