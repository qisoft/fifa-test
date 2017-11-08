import React from 'react';
import PropTypes from 'prop-types';
import Match from './Match';
import styles from './MatchesList.less';
import ErrorMessage from './ErrorMessage';

export default class MatchesList extends React.Component {
  static get propTypes() {
    return {
      matches: PropTypes.array.isRequired,
    }
  }
  render() {
    const { matches } = this.props;
    return <div className={styles.container}>
      { matches.length > 0
        ? matches.map(m => <Match key={m.match_number} match={m} />)
        : <ErrorMessage error="No matches for this FIFA Code found" />
      }
    </div>;
  }
}