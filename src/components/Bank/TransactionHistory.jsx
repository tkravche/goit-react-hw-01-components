import PropTypes from 'prop-types';
import transactions from './transactions.json';
import { Transaction } from './Transaction';
import {
  StyledTableHead,
  StyledTable,
  StyledTableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ type, amount, currency, id }) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </StyledTableHead>
      <StyledTableBody>
        {transactions.map((transaction, index) => {
          return (
            <Transaction
              key={transaction.id}
              index={index}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
