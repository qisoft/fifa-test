import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.less';

export default class ErrorMessage extends React.Component {
  static get propTypes() {
    return {
      error: PropTypes.string,
    }
  }
  render() {
    const { error } = this.props;
    return (
      <div className={styles.error}>
        {error
          ? error
          : (
            <div>
              Oop... Something went wrong.
              <br/>
              Search for another FIFA code or try again later.
            </div>
          )
        }
      </div>
    );
  }
}