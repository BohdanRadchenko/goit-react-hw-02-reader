/*eslint-disable*/
import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
};

export default Publication;
