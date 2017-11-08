import React from 'react';
import PropTypes from 'prop-types';

export default class Matches extends React.Component {
  static get propTypes() {
    return {
      matches: PropTypes.array.isRequired,
    }
  }
  render() {
    const { matches } = this.props;
    return <div>

    </div>;
  }
}