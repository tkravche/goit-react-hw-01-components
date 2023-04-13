import styled from 'styled-components';

export const StatusSpan = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  gap: 30px;
  margin-bottom: 7px;
  padding: 20px;
  padding-right: 70px;
  border-radius: 4px;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const StyledFriendListImage = styled.img`
background-color: #e7ecf2;
border-radius: 6px;
padding: 6px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
}
`;
