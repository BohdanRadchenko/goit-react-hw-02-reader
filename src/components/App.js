/*eslint-disable*/
import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from '../assets/publications.json';

class App extends Component {
  state = {
    indexCount: 0,
  };

  getIndex(i) {
    console.log(i);
    this.setState = {
      indexCount: i,
    };
  }

  render() {
    const { indexCount } = this.state;
    return (
      <div>
        <Reader />
      </div>
    );
  }
}

export default App;
