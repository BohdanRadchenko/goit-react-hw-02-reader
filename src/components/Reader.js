import React, { Component } from 'react';
// import styles from './Reader.module.css';
import publications from '../assets/publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

class Reader extends Component {
  state = {
    indexValue: 1,
    items: publications,
  };

  componentDidMount() {
    if (localStorage.getItem('indexValue')) {
      const index = localStorage.getItem('indexValue');
      this.setState({
        indexValue: JSON.parse(index),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { indexValue } = this.state;
    if (prevState !== this.state) {
      localStorage.setItem('indexValue', JSON.stringify(indexValue));
    }
  }

  hendleDecrement = () => {
    const { indexValue } = this.state;
    if (indexValue > 1) {
      this.setState(state => ({
        indexValue: state.indexValue - 1,
      }));
    }
  };

  hendleIncrement = () => {
    const { indexValue } = this.state;
    if (indexValue < publications.length) {
      this.setState(state => ({
        indexValue: state.indexValue + 1,
      }));
    }
  };

  render() {
    const { indexValue, items } = this.state;
    return (
      <>
        <Publication
          title={items[indexValue - 1].title}
          text={items[indexValue - 1].text}
        />
        <Counter itemsLength={items.length} indexValue={indexValue} />
        <Controls
          indexValue={indexValue}
          itemsLength={items.length}
          hendleIncrement={this.hendleIncrement}
          hendleDecrement={this.hendleDecrement}
        />
      </>
    );
  }
}

export default Reader;
