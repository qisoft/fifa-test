import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.less';

export default class SearchBar extends Component {
  state = { query: '' };

  static get propTypes() {
    return {
      onSearch: PropTypes.func.isRequired,
      isLoading: PropTypes.bool,
    }
  }

  static get defaultProps() {
    return {
      isLoading: false,
    }
  }

  onChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  send = () => {
    this.props.onSearch(this.state.query);
  };

  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.send();
    }
  };

  render() {
    const { isLoading } = this.props;
    return <div className={styles.container}>
      <input value={this.state.query} placeholder="Enter FIFA Code Here" onKeyUp={this.onEnter} onChange={this.onChange}/>
      <button disabled={isLoading || !(this.state.query && this.state.query.length > 0) } onClick={this.send}>Search</button>
    </div>;
  }
}