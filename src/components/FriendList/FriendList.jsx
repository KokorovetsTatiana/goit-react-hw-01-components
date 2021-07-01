import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default function FriendList({ friends }) {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendlist}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};