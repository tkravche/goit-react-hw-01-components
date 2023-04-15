import PropTypes from 'prop-types';
import { StyledTableData, StyledTableRow } from './Transaction.styled';
export const Transaction = ({ type, amount, currency, index }) => {
  return (
    <StyledTableRow index={index}>
      <StyledTableData>{type}</StyledTableData>
      <StyledTableData>{amount}</StyledTableData>
      <StyledTableData>{currency}</StyledTableData>
    </StyledTableRow>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
