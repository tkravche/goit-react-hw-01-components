import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  max-width: 50%;
  width: 50%;
  border-radius: ${props => props.theme.radii.medium};
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const StyledTableHead = styled.thead`
  height: 40px;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-radius: ${props => props.theme.radii.medium};
`;

export const StyledTableBody = styled.tbody``;
