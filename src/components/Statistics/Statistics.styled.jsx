import styled from 'styled-components';

export const StatisticsSection = styled.section`
width: 500px;
height: 200px;
background-color: ${p => p.theme.colors.white};
`;

export const Title = styled.h2`
padding-top: ${p => p.theme.space[5]}px;
padding-bottom: ${p => p.theme.space[5]}px;
text-transform: uppercase;
font-size: ${p => p.theme.fontSizes.l};
text-align:center;
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
background-color: ${p => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}}
`;