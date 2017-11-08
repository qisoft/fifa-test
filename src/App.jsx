import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.less';
import Header from './components/Header';

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
