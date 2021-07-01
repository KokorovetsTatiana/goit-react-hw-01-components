import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function friendOnline(status) {
  if (status) {
    return '#00ff00';
  } else {
    return '#ff0000';
  }
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
    name: 'User name',
    isOnline: false,
}

export default function FriendListItem({ avatar, name, isOnline}) {
    return (
        <li className={styles.item}>
            <span
              className={styles[isOnline]}
              style={{ color: friendOnline(isOnline) }}
            >
              {' '}
              ●
            </span>
            <img
              className={styles.avatar}
              src={avatar}
              alt={name}
              width="48"
            />
            <p className={styles.name}>{name}</p>
          </li>
    )
};