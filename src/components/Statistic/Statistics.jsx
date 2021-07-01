import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

const color = item => {
    const colorArray = [
    '#F3014F',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

Statistics.defaultProps = {
  title: '',
  label: 'format',
};

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: color(item) }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};