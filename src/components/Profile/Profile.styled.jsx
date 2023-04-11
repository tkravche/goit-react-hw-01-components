import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 250px;
  height: 335px;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const ProfileDescription = styled.div`
  background-color: ${p => p.theme.colors.white};
  height: 260px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
  padding-top: ${p => p.theme.space[5]}px;
`;
export const ProfileUserName = styled.p`
  padding-top: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.black};
  font-size: 25px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const ProfileTag = styled.p`
  color: ${p => p.theme.colors.grey};
  padding-top: ${p => p.theme.space[3]}px;
`;
export const ProfileLocation = styled.p`
  color: ${p => p.theme.colors.grey};
  padding-top: ${p => p.theme.space[3]}px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  background-color: ${p => p.theme.colors.lightgrey};
  border: 1px solid #e4e9f0;
  cursor: pointer;
  transition: background linear 0.5s;
  :hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;
export const StatsLabel = styled.span`
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const StatsQuantity = styled.span`
  padding-bottom: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
