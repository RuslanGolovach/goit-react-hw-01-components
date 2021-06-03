import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.Profile}>
      <div className={styles.ProfileIfo}>
        <img src={avatar} alt="Аватар пользователя" width="200" />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.List}>
        <li>
          <span className={styles.Stats}>Followers:</span>
          <span>
            <br />
            {stats.followers}
          </span>
        </li>
        <li>
          <span className={styles.Stats}>Views:</span>
          <span>
            <br />
            {stats.views}
          </span>
        </li>
        <li>
          <span className={styles.Stats}>Likes:</span>
          <span>
            <br />
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};
Profile.defaultProps = {
  avatar: defaultAvatar,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
