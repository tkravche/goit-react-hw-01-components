import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 500px;
  height: 200px;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 70px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-basis: calc(100% / 5);
  `;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.white};
  padding: 34px;
  background-color: ${p => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  background-color: ${p => p.theme.colors.lightgrey};
  border: 1px solid #e4e9f0;
  cursor: pointer;
  transition: background-color linear 0.5s;
  :hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;
export const StatsLabel = styled.span`
  padding-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const StatsQuantity = styled.span`
  padding-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
