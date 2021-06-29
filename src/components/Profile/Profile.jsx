import styles from './Profile.module.css';
import PropTypes from "prop-types";

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number, 
}

export default function Profile({
    avatar,
    name,
    tag,
    location,
    followers,
    views,
    likes
}){
        return (
            <section className={styles.profile} id="task1">
                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>
                <ul className={styles.stats}>
                    <li>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}>{followers}</span>
                    </li>
                    <li>
                    <span className={styles.label}>Views</span>
                        <span className={styles.quantity}>{views}</span>
                    </li>
                    <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                    </li>
                </ul>
                </section>
        )}