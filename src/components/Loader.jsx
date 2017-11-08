import React from 'react';
import styles from './Loader.less';

export default ({
                         small,
                         ...props
                       }) => (
  <ul
    {...props}
    className={styles.loader}
  >
    <li />
    <li />
    <li />
  </ul>
);
