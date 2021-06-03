import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import styles from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.FriendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
