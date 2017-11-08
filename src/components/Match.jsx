import React from 'react';
import moment from 'moment';
import styles from './Match.less';

export default ({ match }) => (
  <div className={styles.match}>
    <div className={styles.header}>
      <div className={styles.number}>#{ match.match_number }</div>
      <div className={styles.location}>{ match.location }</div>
      <div className={styles.date}>{ moment(match.datetime).format('MMM Do YY') }</div>
    </div>
    <div className={styles.teams}>
      <div className={styles.team}>
        <div className={styles.goals}>{match.home_team.goals}</div>
        <div className={styles.country}>{match.home_team.country} ({match.home_team.code})</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.team}>
        <div className={styles.goals}>{match.away_team.goals}</div>
        <div className={styles.country}>{match.away_team.country} ({match.away_team.code})</div>
      </div>
    </div>
    <div className={styles.winner}>
      Winner: { match.winner } ({match.winner_code})
    </div>
  </div>
);