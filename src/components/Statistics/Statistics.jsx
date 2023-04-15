import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  StatisticsList,
  Title,
  StatisticsSection,
  StatsLabel,
  StatsQuantity,
} from './Statistics.styled';

export const Statistics = ({ title = null, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(stats => {
          return (
            <ListItem key={stats.id}>
              <StatsLabel>{stats.label}</StatsLabel>
              <StatsQuantity>{stats.percentage}%</StatsQuantity>
            </ListItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
