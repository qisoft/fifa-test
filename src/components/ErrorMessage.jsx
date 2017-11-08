import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorMessage extends React.Component {
  static get propTypes() {
    return {
      error: PropTypes.string.isRequired,
    }
  }
  render() {
    const { error } = this.props;
    return <div>{error}</div>;
  }
}