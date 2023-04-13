import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  height: 30px;
  background-color: ${props =>
    props.index % 2 === 0 ? props.theme.colors.muted : 'transparent'};
  :hover {
    background-color: rgb(115, 120, 175);
    box-shadow: 0 6px 6px -6px #0e1119;
    color: #ffffff;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #400075;
  }
`;
export const StyledTableData = styled.td`
  text-align: center;
`;
