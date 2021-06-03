import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th className={styles.Heading}>Type</th>
          <th className={styles.Heading}>Amount</th>
          <th className={styles.Heading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.TableItem}>{type} </td>
            <td className={styles.TableItem}>{amount} </td>
            <td className={styles.TableItem}>{currency} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
