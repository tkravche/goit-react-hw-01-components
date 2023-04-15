import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import {
  StyledTableHead,
  StyledTable,
  StyledTableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
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
        {items.map((item, index) => {
          return (
            <Transaction
              key={item.id}
              index={index}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
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
