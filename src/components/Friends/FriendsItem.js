import React from 'react';
import styles from './Friends.module.css';

const FriendsItem = ({ id, avatar, name, isOnline }) => (
  <li className={styles.Item} key={id}>
    <span className={isOnline ? styles.StatusOnline : styles.StatusOffline}>
      ⬤{isOnline}
    </span>

    <img src={avatar} alt={name} width="48" />
    <p className={styles.Name}>{name}</p>
  </li>
);

export default FriendsItem;
