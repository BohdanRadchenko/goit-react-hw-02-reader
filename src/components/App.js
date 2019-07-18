/*eslint-disable*/
import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from '../assets/publications.json';

class App extends Component {
  state = {
    id: '4db49f19-9aa2-4faf-9862-a97efaefd21c',
  };

  getIndex(i) {
    console.log(i);
    this.setState = {
      indexCount: i,
    };
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        <Reader items={publications} id={id} />
      </div>
    );
  }
}

export default App;
