import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title ? <h2>{title}</h2> : ''}

      <ul className={styles.StatisticsList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.Item} key={id}>
            <span className={styles.Label}>{label}</span>
            <span className={styles.Percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
