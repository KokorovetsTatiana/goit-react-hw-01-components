import styles from './Transaction.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

TransactionHistory.defaultProps = {
  type: 'Type',
  currency: 'Currency',
};

export default function TransactionHistory({ items }) {
  return (
    <div className={styles.transTable}>
          <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
              <tr key={item.id}>
              <td>{upperFirstLetter(item.type)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};