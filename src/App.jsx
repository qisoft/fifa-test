import React, { Component } from 'react';
import styles from './App.less';
import Header from './components/Header';
import Matches from './Matches';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Matches />
      </div>
    );
  }
}

export default App;
